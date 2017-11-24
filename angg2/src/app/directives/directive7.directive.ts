import { Directive , ElementRef} from '@angular/core';

@Directive({
    selector: '[appDirective7]',
    host:{
        '(focus)':'onElementFocus()',
        '(blur)':'onElementBlur()'        
    }
})

export class Directive7Directive {
	
    private placeholdervalue; 
	
    constructor(private eref: ElementRef) { }
	
    onElementFocus(){
		this.placeholdervalue = this.eref.nativeElement.getAttribute('placeholder');		
        this.eref.nativeElement.setAttribute('placeholder' , '');
        this.eref.nativeElement.style.border = "1px solid #000000";	    
    }
	
	onElementBlur(){
	    this.eref.nativeElement.setAttribute('placeholder' , this.placeholdervalue);
		this.placeholdervalue = "";
		this.eref.nativeElement.style.border = "1px solid #CCC5B9";	    
    }
}
