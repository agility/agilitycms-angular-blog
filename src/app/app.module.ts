import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// agility  stuff
import { ModuleDirective } from './module.directive';
import { AgilityService } from "../agility/agility.service";
import { AgilityPageComponent } from './agility-page/agility-page.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { AgilityModuleComponent } from '../agility/agility-module.component';
import { ModuleRichTextAreaComponent } from './module-richtextarea/module-richtextarea.component';
import { ModuleWheretostartComponent } from './module-wheretostart/module-wheretostart.component'
import { RouteReuseStrategy } from '@angular/router';
import { AgilityRouteReuseStrategy } from '../agility/AgilityRouteReuseStrategy';
import { ModulePostsListingComponent } from './module-posts-listing/module-posts-listing.component';
import { ModulePostDetailsComponent } from './module-post-details/module-post-details.component';
import { PreviewBarComponent } from './preview-bar/preview-bar.component';

@NgModule({
  declarations: [
    AppComponent,
	ModuleDirective,
    AgilityPageComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    AgilityModuleComponent,
    ModuleRichTextAreaComponent,
    ModuleWheretostartComponent,
    ModulePostsListingComponent,
    ModulePostDetailsComponent,
    PreviewBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	  AgilityService,
	  { provide: RouteReuseStrategy, useClass: AgilityRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
