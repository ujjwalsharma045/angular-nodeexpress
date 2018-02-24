import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {SlidersService} from '../sliders.service';

@Component({
  selector: 'app-sliderview',
  templateUrl: './sliderview.component.html',
  styleUrls: ['./sliderview.component.css'],
  providers: [SlidersService]
})

export class SliderviewComponent implements OnInit {
    
	private sliderid;
	private sliderDetail = {
		_id:'1',
		title:'2dsg',
		content:'dfg',
		status:'A',
		created_at:'sg',
	    order:'sg',
		image:'assets/img/apple-icon.png' 
	};
	
	constructor(private route: ActivatedRoute, private router: Router,  private http: HttpClient, private slidersService:SlidersService) { 
	    this.route.params.subscribe(params => {
	        this.sliderid = params['id'];
		});
		
		this.slidersService.getSlider(this.sliderid).subscribe(function(res){ 
		
		});
	}
	
    ngOnInit() {
		//this.slidersService
    }	
}
