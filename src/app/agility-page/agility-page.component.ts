import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

import { AgilityService } from "../../agility/agility.service"
import { Title } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';

@Component({
	selector: 'app-agility-page',
	templateUrl: './agility-page.component.html',
	styleUrls: ['./agility-page.component.css']
})
export class AgilityPageComponent implements OnInit {

	public pageInSitemap: any = null
	public page: any = null
	public pageStatus:number = 0
	public dynamicPageItem:any = null
	public isPreview:boolean

	constructor(
		private location: Location,
		private router: Router,
		private route: ActivatedRoute,
		private titleService: Title,
		private agilityService: AgilityService
	) {
		this.pageStatus = 0
		this.isPreview = isDevMode()
	}

	async ngOnInit(): Promise<void> {
		try {

			const sitemapFlat = await this.agilityService.getSitemapFlat();

			let currentPath = location.pathname
			if (currentPath.indexOf("?") !== -1) currentPath = currentPath.substring(0, currentPath.indexOf("?"))
			if (currentPath === "/") [currentPath] = Object.keys(sitemapFlat)

			this.pageInSitemap = sitemapFlat[currentPath]

			if (!this.pageInSitemap) {
				//TODO: load the 404 page...
				this.pageStatus = 404
				console.error(`404 - Page ${currentPath} not found in sitemap.`)
				return
			}


			//get the page object
			this.page = await this.agilityService.getPage(this.pageInSitemap.pageID)

			if (!this.page) {
				console.error(`500 - Page ${currentPath} with id ${this.pageInSitemap.pageID} could not be loaded.`)
				this.pageStatus = 500
				return
			}

			//get the dynamic page item
			if (this.pageInSitemap.contentID > 0) {

				this.dynamicPageItem = await this.agilityService.getContentItem(this.pageInSitemap.contentID)

			}

			//set the document title...
			this.titleService.setTitle(this.pageInSitemap.title)


			this.pageStatus = 200
		} catch (error) {
			console.error("An error occurred: ", error)
			this.pageStatus = 5000
		}

	}

}
