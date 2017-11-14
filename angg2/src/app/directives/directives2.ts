import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector:'[hovering]',
  host:{
    '(mouseover)' : 'onMouseover()',
	'(mouseout)' : 'onMouseout()',
  }
})

export class HoveringDirective {
   	
	constructor(private elRef: ElementRef){
		
	}
	    
	
	onMouseover(){
		this.elRef.nativeElement.style.backgroundColor = "green";
	}
	
	onMouseout(){
		this.elRef.nativeElement.style.backgroundColor = "#3091B2";
	}
}
