import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-bar',
  templateUrl: './preview-bar.component.html',
})
export class PreviewBarComponent implements OnInit {

	public visible:boolean = true

  constructor() { }

  toggle() {
	  this.visible = !this.visible
  }

  ngOnInit(): void {
  }

}
