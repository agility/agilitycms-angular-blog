import { Component, Input, OnInit } from '@angular/core';
import { IAgilityModuleComponent } from 'src/agility/agility.module.icomponent';

@Component({
	selector: 'app-module-herobackgroundasimage',
	templateUrl: './module-herobackgroundasimage.component.html'
})
export class ModuleHerobackgroundasimageComponent implements IAgilityModuleComponent {

	@Input() data: any;

	public item:any = null;

	constructor() {

	 }


	ngOnInit(): void {
		this.item = this.data.item.fields

		console.log(this.item)
	}

}
