import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hcareEmailValidator]',
  providers: [{ 
      provide: NG_VALIDATORS, 
      useExisting: forwardRef(() => EmailValidator), 
      multi: true 
    }]
})
export class EmailValidator implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value= control.value as string;
    if(value?.includes('test')) {
      return {
        notAllowed: true
      }
    }
    return null;
  }

  constructor() { }

}
