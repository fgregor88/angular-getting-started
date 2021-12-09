import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from "./star.component";
import {PriceComponent} from "./price.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StarComponent,
    PriceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    PriceComponent
  ]
})
export class SharedModule { }
