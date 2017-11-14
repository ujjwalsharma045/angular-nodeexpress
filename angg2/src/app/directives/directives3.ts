import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector:'[linkhovering]',
  host:{
    '(mouseover)' : 'onMouseover()',
	'(mouseout)' : 'onMouseout()',
  }
})

export class LinkhoveringDirective {
   	
	constructor(private elRef: ElementRef){
		
	}
	    	
	onMouseover(){
		this.elRef.nativeElement.style.textDecoration = "underline";
	}
	 
	onMouseout(){
		this.elRef.nativeElement.style.textDecoration = "none";
	}
}
