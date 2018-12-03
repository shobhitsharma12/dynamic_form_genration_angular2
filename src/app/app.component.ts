import { Component, ViewChild } from '@angular/core';

import { FormFieldComponent } from './forms/formfield/form.field.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('formField') formField: FormFieldComponent;

  name = 'Angular';
  private field: any = { label: 'Dynamic Label', type: 'string' };
  private input: any = { type: 'radio' }
  public formFieldConfig: any = { field: this.field, input: this.input }

  ngAfterViewInit() {
    const self = this;
    window.a = this.formField
    setTimeout(() => {
      console.log(self.formField.getValue());
    }, 5000)
  }

  onFieldUpdate(data) {
    console.log(data)
  }
}
