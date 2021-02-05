import { Injectable } from '@angular/core'
import agilityFetch from '@agility/content-fetch'
import agilityConfig from "../agility/agility.config"

@Injectable({
	providedIn: 'root'
})
export class AgilityService {

	private agilityClient = null

	constructor() {

		this.agilityClient = agilityFetch.getApi({
			guid: agilityConfig.guid,
			apiKey: agilityConfig.previewAPIKey,
			isPreview: agilityConfig.isPreview
		})

	}

	getSitemapFlat(): Promise<any> {

		return this.agilityClient.getSitemapFlat({
			languageCode: agilityConfig.languageCode,
			channelName: agilityConfig.channelName
		})
	}

	getPage(pageID:number): Promise<any> {

		return this.agilityClient.getPage({
			languageCode: agilityConfig.languageCode,
			pageID
		})
	}

	async getHeader(): Promise<any> {

		const lstRes = await this.agilityClient.getContentList({
			languageCode: agilityConfig.languageCode,
			referenceName: "csdigitalmarketing"
		})

		if (lstRes?.items?.length > 0) {
			return lstRes.items[0]
		}

		return null

	}

	async getFooter(): Promise<any> {

		const lstRes = await this.agilityClient.getContentList({
			languageCode: agilityConfig.languageCode,
			referenceName: "globalfooter"
		})

		if (lstRes?.items?.length > 0) {
			return lstRes.items[0]
		}

		return null

	}
}
