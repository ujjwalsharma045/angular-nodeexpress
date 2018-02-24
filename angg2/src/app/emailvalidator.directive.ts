import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  AbstractControl,  
  ValidatorFn,  
  Validator  
} from '@angular/forms'; 
 
import { Directive , forwardRef} from '@angular/core';

@Directive({
    selector: '[appEmailvalidator][ngModel]',
    providers: [  
		{  
			provide: NG_VALIDATORS,  
			useExisting: forwardRef(() => EmailvalidatorDirective),  
			multi: true  
		}  
    ]  
})

export class EmailvalidatorDirective implements  Validator{

    constructor() { 
      
    }

	validate(c: AbstractControl): { [key: string]: any } {  
       
            //alert(c.value);			
			if(c.value=="vikas"){  
			    return {  
				    appEmailvalidator: true  
				};
			} 
    }  
}	
