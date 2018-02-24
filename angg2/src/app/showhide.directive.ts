import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appShowhide]'
})
export class ShowhideDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  
    @Input() 
	set appShowhide(count:any) {
		//alert(range[0]);
		//alert(range[1]);				
		if(count<1 || count==""){			
		    this.viewContainer.clear();	
		}
		else {
			this.viewContainer.createEmbeddedView(this.templateRef);	
		}
	}

}
