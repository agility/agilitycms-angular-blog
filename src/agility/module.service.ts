import { Injectable } from '@angular/core';


import { ModuleRichTextAreaComponent } from '../app/module-richtextarea/module-richtextarea.component'
import { ModulePostsListingComponent } from "../app/module-posts-listing/module-posts-listing.component"
import { ModuleHerobackgroundasimageComponent } from '../app/module-herobackgroundasimage/module-herobackgroundasimage.component'
import { ModulePostDetailsComponent } from "../app/module-post-details/module-post-details.component"

@Injectable({
	providedIn: 'root'
})

/**
 * Use this service to define all of the components that work as Agility Modules
 */
export class ModuleService {

	constructor() { }

	getModule(moduleName: string) {
		switch (moduleName.toLowerCase()) {
			case "richtextarea":
				return ModuleRichTextAreaComponent;
			case "herobackgroundasimage":
				return ModuleHerobackgroundasimageComponent;
			case "postslisting":
				return ModulePostsListingComponent;
			case "postdetails":
				return ModulePostDetailsComponent;
		}

		console.warn(`Module component not found for ${moduleName}.`)
		return null

	}
}
