import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

import { AgilityService } from "../agility.service"
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'app-agility-page',
	templateUrl: './agility-page.component.html',
	styleUrls: ['./agility-page.component.css']
})
export class AgilityPageComponent implements OnInit {

	public pageInSitemap: any
	public page: any
	public pageStatus:number


	constructor(
		private location: Location,
		private router: Router,
		private route: ActivatedRoute,
		private titleService: Title,
		private agilityService: AgilityService
	) {
		this.pageStatus = 0
	}

	async ngOnInit(): Promise<void> {
		try {
			const sitemapFlat = await this.agilityService.getSitemapFlat();

			let currentPath = location.pathname
			if (currentPath.indexOf("?") !== -1) currentPath = currentPath.substring(0, currentPath.indexOf("?"))
			if (currentPath === "/") [currentPath] = Object.keys(sitemapFlat)

			const pageInSitemap = sitemapFlat[currentPath]

			if (!pageInSitemap) {
				//TODO: load the 404 page...
				this.pageStatus = 404
				console.error(`404 - Page ${currentPath} not found in sitemap.`)
				return
			}


			//get the page object
			console.log(pageInSitemap)
			this.page = await this.agilityService.getPage(pageInSitemap.pageID)

			if (!this.page) {
				console.error(`500 - Page ${currentPath} with id ${pageInSitemap.pageID} could not be loaded.`)
				this.pageStatus = 500
				return
			}

			//set the document title...
			this.titleService.setTitle(this.page.title)

			console.log(this.page)

			this.pageStatus = 200
		} catch (error) {
			console.error("An error occurred: ", error)
			this.pageStatus = 5000
		}

	}

}
