import { Component, OnInit, Input } from '@angular/core';
import {IAgilityModuleComponent } from "../../agility/agility.module.component"

@Component({
  selector: 'app-module-richtextarea',
  template: `
    <section class="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full" [innerHTML]="textblob"></section>
  `,
  styles: [
  ]
})
export class ModuleRichTextAreaComponent implements IAgilityModuleComponent {
	@Input() data: any;

	public textblob:string

  constructor() {

   }

  ngOnInit(): void {
	this.textblob = this.data.item.fields.textblob
  }

}
