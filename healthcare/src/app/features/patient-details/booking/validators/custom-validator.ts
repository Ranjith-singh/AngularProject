import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {

    static validateGuestEmail(control: AbstractControl){
        const value= control.value as string
        if(value.includes('test')) {
            return {
                invalid: true
            }
        }
        return null;
    }

    static validateSpecialChar(char: string){
        return (control: AbstractControl)=>{
            const value= control.value as number
            if(value.toString().includes(char)) {
                return {
                    invalid: true
                }
            }
            return null;
        }
    }

    static validateDate(formGroup: FormGroup) {
        const checkInDate= formGroup.get('checkinDate')?.value;
        const checkOutDate= formGroup.get('checkoutDate')?.value;
        if(checkOutDate <= checkInDate) {
            return {
                dateError: true
            }
        }
        return null;
    }
}
