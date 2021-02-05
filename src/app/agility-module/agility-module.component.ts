import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { IAgilityModuleComponent } from "../../agility/agility.module.component"
import { ModuleDirective } from "../module.directive"
import { ModuleService } from '../module.service';


@Component({

  selector: 'app-agility-module',
  template: `
	<ng-template agilityModule></ng-template>
  `,
  styleUrls: []
})


export class AgilityModuleComponent implements OnInit {
	@Input() moduleObj: any;
	@Input() page: any;
	@Input() dynamicPageItem: any;
	@ViewChild(ModuleDirective, {static: true}) agilityModule: ModuleDirective;

	public loaded:boolean

  constructor(
	  private componentFactoryResolver: ComponentFactoryResolver,
	  private moduleService:ModuleService
	) {
		this.loaded = false
	 }

  ngOnInit(): void {
	this.loadComponent()
  }

  loadComponent() {

	//get the module name
	let moduleName:any = this.moduleObj.module

	//get the module type from our module service
	let moduleType = this.moduleService.getModule(moduleName)
	if (moduleType == null) {
		console.warn(`No module found for ${moduleName}`)
		return
	}
	//resolve the component for our module
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<IAgilityModuleComponent>(moduleType);

    const viewContainerRef = this.agilityModule.viewContainerRef;
    viewContainerRef.clear();

	//instantiate the module in the container
    const componentRef = viewContainerRef.createComponent<IAgilityModuleComponent>(componentFactory);

	//add the data to the module
    componentRef.instance.data = {
		...this.moduleObj,
		page: this.page,
		dynamicPageItem: this.dynamicPageItem

	}

	this.loaded = true
  }

}
