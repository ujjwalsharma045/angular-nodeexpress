import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective8]',
  host:{
	'(mouseover)':'Mousefocus()',
	'(mouseout)':'Mouseblur()',
  }
})
export class Directive8Directive {

    constructor(private elref:ElementRef) { 
    }

    Mousefocus(){
	  this.elref.nativeElement.style.fontWeight = "bold";
    }

    Mouseblur(){
	  this.elref.nativeElement.style.fontWeight = "normal";
    }   
}
