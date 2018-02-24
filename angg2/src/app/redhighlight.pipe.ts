import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redhighlight'
})
export class RedhighlightPipe implements PipeTransform {

    transform(value: any, args?: any): any {
	    if(value=='A'){
		    return 'Active';
	    } 
        else {		
            return '<strong style="color:red">Inactive</strong>';  
		}
    }
}
