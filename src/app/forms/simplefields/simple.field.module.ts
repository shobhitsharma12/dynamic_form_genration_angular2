// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleFieldComponent } from './simple.field.component'
import { StringFieldComponent } from './stringfield/string.field.component'


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    SimpleFieldComponent,
    StringFieldComponent
  ],
  exports: [
    SimpleFieldComponent,
    StringFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class SimpleFieldModule { }