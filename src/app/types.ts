export interface FieldDependency {
  // field: 
}

export interface Field {
  // unique identifier for a field in a form
  fieldId: string
  // the label to be displayed along with the form field
  label?: string
  // the type of form field to be rendered
  type: string
  // the current value of the user selection
  value: any
  // converts the value to a format which the backend considers consumable
  valueTransformer: (value) => any
  // fields updating which might affect this field
  depends: FieldDependency[]
  // validator js rules
  validationRules: string
}

export interface FormField {
  // input properties clubbed in an object e.g. <input ... />
  input?: any
  // field properties
  field: Field
  // the data provider is treated like a promise/async operation
  dataProvider: () => any
}

// Components which respond with transformed values need to implement it
export interface IValueGenerator {
  getValue: (value) => any
  getRawValue: (value) => any
}