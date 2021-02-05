import { Component, OnInit } from '@angular/core';
import { AgilityService } from "../agility.service"

@Component({
  selector: 'app-global-footer',
  templateUrl: 'global-footer.component.html',
  styles: [
  ]
})
export class GlobalFooterComponent implements OnInit {

	public footerData: any

	constructor(private agilityService: AgilityService) { }

	async ngOnInit(): Promise<void> {
		const obj = await this.agilityService.getFooter()

		this.footerData = obj.fields

		console.log("footer", this.footerData)
	}

}
