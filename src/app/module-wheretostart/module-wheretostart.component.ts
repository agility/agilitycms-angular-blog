import { Component, Input } from '@angular/core';
import { IAgilityModuleComponent } from 'src/agility/agility.module.icomponent';

@Component({
  selector: 'app-module-wheretostart',
  templateUrl: './module-wheretostart.component.html',
  styles: [
  ]
})
export class ModuleWheretostartComponent implements IAgilityModuleComponent {
	@Input() data: any;

	public item:any = null

  constructor() { }

  ngOnInit(): void {
	  this.item = this.data.item.fields
  }


}
