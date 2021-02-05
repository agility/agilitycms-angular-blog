// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[agilityModule]',
})
export class ModuleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}