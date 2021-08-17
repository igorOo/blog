import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export class BlogValidators{

    public static confirmPassword(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any} | null => {
            if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
                return {passwordMismatch: true}
            }
            return {passwordMismatch: false}
        }

    }
}
