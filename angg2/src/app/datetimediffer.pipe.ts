import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'datetimediffer'
})
export class DatetimedifferPipe implements PipeTransform {
    transform(value: any, args?: any): any {
	    var datePipe = new DatePipe("en-US");
	    var date = datePipe.transform(value, 'dd MMMM,yyyy');
		var time = datePipe.transform(value, 'hh:mm:ss a');
        return "<div><div><b>Date</b>: "+date+"</div><div><b>Time</b>: "+time+"</div></div>";
    }
}
