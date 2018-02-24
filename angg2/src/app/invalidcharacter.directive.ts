import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  AbstractControl,  
  ValidatorFn,  
  Validator  
} from '@angular/forms'; 
 

import { Directive , forwardRef } from '@angular/core';

@Directive({
    selector: '[appInvalidcharacter][ngModel]',
    providers: [  
		{  
			provide: NG_VALIDATORS,  
			useExisting: forwardRef(() => InvalidcharacterDirective),  
			multi: true  
		}  
    ]
})

export class InvalidcharacterDirective implements  Validator{
	
    invalidcharacter:any[] = ['fuck' , 'fucking' , 'idiot' , 'sex' , 'sucker'];
	private isinvalidcharacter:boolean;
    constructor() {  }
  
    validate(c: AbstractControl): { [key: string]: any } {         
		
	    //alert(c.value);
		this.isinvalidcharacter = false;
		if(c.value!=""){
            var strs = c.value.split(" "); 
			for(var i=0; i<strs.length; i++){
				if(this.invalidcharacter.includes(strs[i])){
                    this.isinvalidcharacter = true; 					
				}            									
			} 
			//alert(this.isinvalidcharacter);
			if(this.isinvalidcharacter){
				return {  
					appInvalidcharacter: true  
				};
			}
			else {  
				return {  
					appInvalidcharacter: false  
				}; 
			}			    
		}		
    }
}
