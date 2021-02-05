import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgilityPageComponent } from "./agility-page/agility-page.component"

const routes: Routes = [
	{ path: '**',  component: AgilityPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
