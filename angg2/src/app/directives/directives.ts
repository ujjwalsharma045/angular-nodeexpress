import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector:'[focusing]',
  host:{
    '(focus)' : 'onFocus()',
	'(blur)' : 'onBlur()',
  }
})

export class FocusingDirective {
   	
	constructor(private elRef: ElementRef){
		
	}
	    
	onFocus(){ 	    
	    if(this.elRef.nativeElement.value==""){
			this.elRef.nativeElement.setAttribute("placeholder" , "");
		}        
	}
	
	onBlur(){ 	    
	    if(this.elRef.nativeElement.value==""){
			this.elRef.nativeElement.setAttribute("placeholder" , "Search");
		}        	
	}
	
	onMouseOver(){
		this.elRef.nativeElement.style.backgroundColor = "green";
	}
	
	onMouseOut(){
		this.elRef.nativeElement.style.backgroundColor = "blue";
	}
}
