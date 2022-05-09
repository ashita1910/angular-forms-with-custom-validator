import { Attribute, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { PasswordChecker } from './passwordChecker';

@Directive({
  selector: '[appPasswordChecker]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordChecker,
    multi: true
  }]
})
export class PasswordCheckerDirective implements Validators {

  constructor(@Attribute('appPasswordChecker') public comparer: string){}

  validate(controlFirst: any){
    const comparerValue = controlFirst.root.get(this.comparer);
    return PasswordChecker(this.comparer, comparerValue);
  }

}
