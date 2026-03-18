import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidatorClass {

    static ValidatorName(control: AbstractControl){
        const value= control.value as string;
        if(value.includes('test')){
            return {
                invalidName: true
            }
        }
        return null;
    }

    static ValidatorSplChar(chars: string){
        return (control: AbstractControl)=>{
            const value= control.value as string;
            if(value.includes(chars)){
                return { invalidSplChar: true}
            }
            return null;
        }
    }

    static dateValidator(control: FormGroup){
        const checkInDate: any= control.get('checkinDate')?.value
        const checkOutDate: any= control.get('checkoutDate')?.value
        const date1= new Date(checkInDate)
        const date2= new Date(checkOutDate)
        console.log(date1);
        console.log(date2);
        if(date2<= date1){
            control.get('checkoutDate')?.setErrors({
                inValidDate: true
            })
            return {
                invalidDate: true
            }
        }
        return null;
    }
}
