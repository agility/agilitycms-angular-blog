import { Injectable } from '@angular/core'
import { isDevMode } from '@angular/core';
import agilityFetch from '@agility/content-fetch'
import agilityConfig from "./agility.config"

@Injectable({
	providedIn: 'root'
})
export class AgilityService {

	private agilityClient = null

	private globalHeader = null
	private globalFooter = null
	private siteMapFlat = null
	private siteMapNested = null


	constructor() {

		const isPreview:boolean = isDevMode()

		//build the correct api client based on preview or dev mode
		this.agilityClient = agilityFetch.getApi({
			guid: agilityConfig.guid,
			apiKey: isPreview ? agilityConfig.previewAPIKey : agilityConfig.fetchAPIKey,
			isPreview: isPreview
		})

	}

	getSitemapFlat(): Promise<any> {

		if (this.siteMapFlat === null) {

			this.siteMapFlat = this.agilityClient.getSitemapFlat({
				languageCode: agilityConfig.languageCode,
				channelName: agilityConfig.channelName
			})
		}
		return this.siteMapFlat
	}

	getSitemapNested(): Promise<any> {

		if (this.siteMapNested === null) {

			this.siteMapNested = this.agilityClient.getSitemapNested({
				languageCode: agilityConfig.languageCode,
				channelName: agilityConfig.channelName
			})
		}
		return this.siteMapNested
	}

	getPage(pageID:number): Promise<any> {

		return this.agilityClient.getPage({
			languageCode: agilityConfig.languageCode,
			pageID
		})
	}

	async getHeader(): Promise<any> {

		if (this.globalHeader !== null) return this.globalHeader

		const lstRes = await this.agilityClient.getContentList({
			languageCode: agilityConfig.languageCode,
			referenceName: "csdigitalmarketing"
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
			languageCode: agilityConfig.languageCode,
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
			languageCode: agilityConfig.languageCode,
			referenceName
		})
	}

	getContentItem(contentID:number) : Promise<any> {
		return this.agilityClient.getContentItem({
			languageCode: agilityConfig.languageCode,
			contentID
		})
	}
}
