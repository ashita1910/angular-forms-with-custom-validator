import { FormGroup } from "@angular/forms";

export function PasswordChecker(controlFirst: string, controlSecond: string) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlFirst];
        const confirmPassword = formGroup.controls[controlSecond];
        return password.value != confirmPassword.value ? confirmPassword.setErrors({mustmatch: true}) : null;
    }
}