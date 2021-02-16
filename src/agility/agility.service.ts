import { Injectable } from '@angular/core'
import { isDevMode } from '@angular/core';
import agilityFetch from '@agility/content-fetch'
import { environment } from "../environments/environment"

@Injectable({
	providedIn: 'root'
})
export class AgilityService {


	private agilityClient = null

	private globalHeader = null
	private globalFooter = null
	private siteMapFlat = null
	private siteMapNested = null
	private languageCode = environment.AGILITY_LANGUAGE_CODE
	private channelName = environment.AGILITY_CHANNEL



	constructor() {

		const isPreview:boolean = isDevMode()

		//build the correct api client based on preview or dev mode
		this.agilityClient = agilityFetch.getApi({
			guid: environment.AGILITY_GUID,
			apiKey: environment.AGILITY_API_KEY,
			isPreview
		})

	}

	getSitemapFlat(): Promise<any> {

		if (this.siteMapFlat === null) {

			this.siteMapFlat = this.agilityClient.getSitemapFlat({
				languageCode: this.languageCode,
				channelName: this.channelName
			})
		}
		return this.siteMapFlat
	}

	getSitemapNested(): Promise<any> {

		if (this.siteMapNested === null) {

			this.siteMapNested = this.agilityClient.getSitemapNested({
				languageCode: this.languageCode,
				channelName: this.channelName
			})
		}
		return this.siteMapNested
	}

	getPage(pageID:number): Promise<any> {

		return this.agilityClient.getPage({
			languageCode: this.languageCode,
			pageID
		})
	}

	async getHeader(): Promise<any> {

		if (this.globalHeader !== null) return this.globalHeader

		const lstRes = await this.agilityClient.getContentList({
			languageCode: this.languageCode,
			referenceName: "globalheader"
		})

		if (lstRes?.items?.length > 0) {
			this.globalHeader = lstRes.items[0]
			return this.globalHeader
		}

		return null

	}

	async getFooter(): Promise<any> {

		if (this.globalFooter !== null) return this.globalFooter

		const lstRes = await this.agilityClient.getContentList({
			languageCode: this.languageCode,
			referenceName: "globalfooter",
			expandAllContentLinks: true
		})

		if (lstRes?.items?.length > 0) {
			this.globalFooter = lstRes.items[0]
			return this.globalFooter
		}

		return null

	}

	getContentList(referenceName: string) : Promise<any> {
		return this.agilityClient.getContentList({
			languageCode: this.languageCode,
			referenceName
		})
	}

	getContentItem(contentID:number) : Promise<any> {
		return this.agilityClient.getContentItem({
			languageCode: this.languageCode,
			contentID
		})
	}
}
