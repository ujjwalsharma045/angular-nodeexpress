import { Component, OnInit , ViewChild } from '@angular/core';
import { BsModalModule } from 'ng2-bs3-modal';
import { SlidersService } from '../sliders.service';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import {URLSearchParams} from '@angular/http';
import { BsModalComponent } from 'ng2-bs3-modal';
import 'rxjs/Rx';

@Component({
  selector: 'app-slideradd',
  templateUrl: './slideradd.component.html',
  styleUrls: ['./slideradd.component.css'],
  providers:[SlidersService]
})

export class SlideraddComponent implements OnInit {
    
	public sliderslist:any[];
	@ViewChild('myModal')
	modal: BsModalComponent;
	
	constructor(private sliderService:SlidersService) { 
	
	}

    ngOnInit() {
        this.sliderService.list().subscribe(function(res){
	           		
		});
	}

    remove(id){
	    this.sliderService.remove(id).subscribe(function(res){
		
		});  
    } 
	deleteUser(){
		
	}
}
