import { Component, Input, OnInit } from '@angular/core';
import { IAgilityModuleComponent } from 'src/agility/agility.module.component';

@Component({
	selector: 'app-module-post-details',
	templateUrl: './module-post-details.component.html',
	styleUrls: ['./module-post-details.component.css']
})
export class ModulePostDetailsComponent implements IAgilityModuleComponent {

	@Input() data: any;

	public post: any = null
	public category: any = null
	public author: any = null

	public tagNames:string = null

	constructor() { }

	ngOnInit(): void {
		this.post = this.data.dynamicPageItem.fields
		if (this.post.category?.fields) {
			this.category = this.post.category.fields
		}

		if (this.post.author?.fields) {
			this.author = this.post.author.fields
		}

		this.tagNames = this.post.tags?.map(t => t.fields.title).join(", ")

	}

}
