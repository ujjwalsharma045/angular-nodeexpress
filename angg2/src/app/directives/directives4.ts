import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector:'[bold]',
  inputs:['fontType']
})

export class BoldDirective {
   	
	constructor(private elRef: ElementRef){
		
	}
	    	
	set fontType(type:string){
		this.elRef.nativeElement.style.fontWeight = type;
	}	 	
}
