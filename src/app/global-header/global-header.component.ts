import { Component, OnInit } from '@angular/core';
import { AgilityService } from "../agility.service"

@Component({
	selector: 'app-global-header',
	templateUrl: './global-header.component.html',
	styles: []
})
export class GlobalHeaderComponent implements OnInit {

	public globalHeader: any
	constructor(private agilityService: AgilityService) {
		this.globalHeader = null
	}

	async ngOnInit(): Promise<void> {
		//TODO: also get the nested sitemap here and populate the links in the header
		let obj = await this.agilityService.getHeader()
		this.globalHeader = obj.fields

	}

}
