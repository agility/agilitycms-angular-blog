import { Injectable } from '@angular/core';

import { ModuleRichTextAreaComponent } from './module-richtextarea/module-richtextarea.component'
import { ModuleWheretostartComponent } from './module-wheretostart/module-wheretostart.component'


@Injectable({
	providedIn: 'root'
})
export class ModuleService {

	constructor() { }

	getModule(moduleName: string) {
		switch (moduleName.toLowerCase()) {
			case "richtextarea":
				return ModuleRichTextAreaComponent;
			case "wheretostart":
				return ModuleWheretostartComponent;
		}

		return null

	}
}
