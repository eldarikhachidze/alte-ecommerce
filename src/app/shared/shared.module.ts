import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../features/main-layout/main-layout.component';
import { AuthAccessDirective } from './directives/auth-access.directive';



@NgModule({
  declarations: [
    AuthAccessDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthAccessDirective
  ]
})
export class SharedModule { }
