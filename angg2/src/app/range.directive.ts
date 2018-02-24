import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective {
   
    month:any[] = [
	   'Jan', 
	   'Feb', 
	   'Mar', 
	   'April', 
	   'May', 
	   'June', 
	   'July', 
	   'Aug', 
	   'Sep', 
	   'Oct', 
	   'Nov', 
	   'Dec'
	];
	
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  
    @Input() 
	set appRange(range: any[]) {
		//alert(range[0]);
		//alert(range[1]);
		
		this.viewContainer.clear();
		if(range[2]=="month"){			
			for(var i= range[0]; i<range[1]; i++){
				this.viewContainer.createEmbeddedView(this.templateRef, { 
				   number: i,
				   monthname:this.month[i-1]
				});
			}
		}
		else {
			for(var i= range[0]; i<range[1]; i++){
				this.viewContainer.createEmbeddedView(this.templateRef, { 
				  number: i
				});
			}
		}
	}  
}
