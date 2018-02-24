import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  AbstractControl, 
  FormControl,  
  ValidatorFn,  
  Validator   
} from '@angular/forms'; 

import { Directive , forwardRef , Input} from '@angular/core';

@Directive({
    selector: '[appOrdercheck][ngModel]',
    providers: [  
		{  
			provide: NG_VALIDATORS,  
			useExisting: forwardRef(() => OrdercheckDirective),  
			multi: true  
		}  
    ]
})

export class OrdercheckDirective implements  Validator{    
	@Input('statusdetail') public statusdetail:string;
	formControl:FormControl;
	
    constructor() { }
  
    validate(c: AbstractControl): { [key: string]: any } {   
        
		if(c.value!=""){
			if(c.root['controls'].status.value=="I"){
			    return {
				    appOrdercheck:true
			    }	
			}
			else {
			    return null;
			}
		}
		else {
			return null;
		}
    } 
}
