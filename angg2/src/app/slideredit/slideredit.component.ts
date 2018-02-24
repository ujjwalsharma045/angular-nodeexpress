import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {SlidersService} from '../sliders.service';

@Component({
  selector: 'app-slideredit',
  templateUrl: './slideredit.component.html',
  styleUrls: ['./slideredit.component.css'],
  providers: [SlidersService]
})

export class SlidereditComponent implements OnInit {
	
	private sliderid;
	private slidereditForm:NgForm;
    private submitted =false; 
	private sliders:any[] = ['1'];
    constructor(private route: ActivatedRoute, private router: Router,  private http: HttpClient, private slidersService:SlidersService) { 
        this.route.params.subscribe(params => {
	        this.sliderid = params['id'];
		});
    }

    ngOnInit() {
		
    }
	
	edit(f){
		this.submitted =true;
		if(f.valid){
			this.slidersService.editSliders(f.value).subscribe(function(res){
				
			});
		}
	}
}
