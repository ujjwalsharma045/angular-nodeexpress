import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusformat'
})

export class StatusformatPipe implements PipeTransform {
    transform(value: any, args?: any): any {    
	   return (value=="A")?"Active":"Inactive";
    }
}
