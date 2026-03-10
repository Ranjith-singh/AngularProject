import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator, 
      multi: true
    }
  ]
})
export class EmailValidator implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string= control.value as string
    if(value && value.includes('test')){
      return {
        invalidEmail: true
      }
    }
    return null;
  }

}
