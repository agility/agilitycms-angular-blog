import { Component, Input } from '@angular/core';
import { IAgilityModuleComponent } from 'src/agility/agility.module.component';

@Component({
  selector: 'app-module-wheretostart',
  template: `
    <p>
      module-wheretostart works!
    </p>
  `,
  styles: [
  ]
})
export class ModuleWheretostartComponent implements IAgilityModuleComponent {
	@Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
