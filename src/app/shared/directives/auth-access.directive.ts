import {Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../core/services";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";

@Directive({
  selector: '[appAuthAccess]'
})
export class AuthAccessDirective {

  constructor(
    private authService:AuthService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    console.log(this.authService.token)
    if(!this.authService.token) {
      this.container.clear()
    } else {
      this.container.createEmbeddedView(this.template)
    }
  }

}
