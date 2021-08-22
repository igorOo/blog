import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export class BlogValidators{

    public static confirmPassword(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any} | null => {
            if (control.parent?.get('password')?.value !== control.parent?.get('confirmPassword')?.value) {
                return {passwordMismatch: true}
            }
            return {passwordMismatch: false}
        }

    }
}
