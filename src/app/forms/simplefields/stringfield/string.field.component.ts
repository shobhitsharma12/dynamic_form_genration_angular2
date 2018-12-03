import { Component, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { SimpleFieldComponent } from '../simple.field.component'
import { Field } from '../../../types'

@Component({
  selector: 'string-field',
  templateUrl: './string.field.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class StringFieldComponent extends SimpleFieldComponent {
  @ViewChild('inputDOM') inputDOM: ElementRef;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super()
  }

  ngAfterViewInit() {
    if (this.input) {
      Object.keys(this.input).map(key => {
        this.inputDOM.nativeElement[key] = this.input[key];
      })
    }
    this.inputDOM.nativeElement.type = 'input';
  }

  private getCurrentValue() {
    return this.inputDOM.nativeElement.value;
  }

  public getValue() {
    return this.getCurrentValue();
  }

  public getRawValue() {
    return this.getCurrentValue();
  }

  handleChange(e) {
    this.onChange.emit(this.getValue());
  }
}
