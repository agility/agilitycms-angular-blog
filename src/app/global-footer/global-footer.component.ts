import { Component, OnInit } from '@angular/core';
import { AgilityService } from "../../agility/agility.service"

@Component({
  selector: 'app-global-footer',
  templateUrl: 'global-footer.component.html',
  styles: [
  ]
})
export class GlobalFooterComponent implements OnInit {

	public globalFooter: any = null


	constructor(private agilityService: AgilityService) { }


	async ngOnInit(): Promise<void> {


		const obj = await this.agilityService.getFooter()
		this.globalFooter = obj.fields
	}

}
