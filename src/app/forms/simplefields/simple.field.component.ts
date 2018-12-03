import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

import { Field, IValueGenerator } from '../../types'

@Component({
  selector: 'simple-field',
  templateUrl: './simple.field.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class SimpleFieldComponent implements IValueGenerator {
  @Input() field: Field;
  @Input() input: any;
  @ViewChildren('simpleField') simpleFields: any
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.simpleFields)
  }

  /**
   * The value transformer is used to fetch the transformed value of the field.
   */
  public getValue() {
    if (this.simpleFields && this.simpleFields.length) {
      const simpleFields: any = this.simpleFields as any
      return this.simpleFields.first.getValue();
    }
    return null
  }

  /**
   * Returns the raw value collected by the field
   */
  public getRawValue() {
    if (this.simpleFields && this.simpleFields.length) {
      return this.simpleFields[0].getRawValue();
    }
    return null
  }

  public handleChange(data) {
    this.onChange.emit(data);
  }
}
