import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';
import { AgilityService } from "../../agility/agility.service"

@Component({
	selector: 'app-global-header',
	templateUrl: './global-header.component.html',
	styles: []
})
export class GlobalHeaderComponent implements OnInit {

	public globalHeader: any = null
	public links:any[]= []
	public isPreview:boolean

	public showMobileMenu:boolean = false

	constructor(private agilityService: AgilityService) {
		this.isPreview = isDevMode()
	}

	toggle() {
		this.showMobileMenu = !this.showMobileMenu
	}

	mobileLink(e) {
		this.showMobileMenu = false
	}

	async ngOnInit(): Promise<void> {
		//TODO: also get the nested sitemap here and populate the links in the header
		let sitemap = await this.agilityService.getSitemapNested()
		let obj = await this.agilityService.getHeader()
		this.globalHeader = obj.fields

		this.links = sitemap
			.filter(s => s.visible.menu)
			.map(s => {
				return {
					url: s.path,
					title: s.title
				}
			})

	}

}
