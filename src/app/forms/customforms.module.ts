// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleFieldModule } from './simplefields/simple.field.module'
import { FormFieldComponent } from './formfield/form.field.component'

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    FormFieldComponent
  ],
  exports: [
    SimpleFieldModule,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleFieldModule
  ],
  providers: []
})
export class CustomFormsModule { }