import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { FormField, IValueGenerator } from '../../types'
import { SimpleFieldComponent } from '../simplefields/simple.field.component'

@Component({
  selector: 'form-field',
  templateUrl: './form.field.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class FormFieldComponent implements IValueGenerator {
  @ViewChild('simpleField') simpleField: SimpleFieldComponent;
  @Input() formField: FormField;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  public getValue() {
    return this.simpleField.getValue();
  }

  public getRawValue() {
    return this.simpleField.getRawValue()
  }

  public handleChange(data) {
    this.onChange.emit(data);
  }
}
