import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'costPriceComparision'
})

export class CostPriceComparisionPipe implements PipeTransform {
    transform(value: any, costprice?: any, productprice?: any): any {
		if(costprice==""){
		   var info = "<b>Cost Price not mentioned</b>";	 
		}
		else if(productprice==""){
		   var info = "<b>Product Price is not mentioned</b>";	 
		}
	    else if(costprice>productprice){
		   var info = "<b>Cost Price is higher than Product Price</b>";	 
	    }
		else {
		   var info = "";	
		}
		
        return value+"<div>"+info+"</div>";
    }
}
