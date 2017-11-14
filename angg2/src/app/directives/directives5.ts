import { Directive, ViewContainerRef, TemplateRef, Input  } from '@angular/core';

@Directive({
  selector:'[showcategoyList]',
})

export class ShowcategoyListDirective {
   	
	constructor(private templateRef: TemplateRef<any> , private viewContainer: ViewContainerRef){
		
	}
	    	
	@Input() set showcategoyList(condition:boolean){ 
		if(condition){
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
		else {
			this.viewContainer.clear();
		}
	}	 	
}
