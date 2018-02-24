import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderformat'
})

export class OrderformatPipe implements PipeTransform {
    transform(value: any, args?: any): any {
	  //console.log(value+"--");
	  //console.log(args+"--");
	  if(args=="A"){
		return value;  
	  }
	  else {
		return value+"(Slider is not active)";  
	  }      
    }
}
