import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class SlidersService {
    private URL = "http://localhost:8081/";
    constructor(private http:Http) { }
  
    addSliders(value){
	    return this.http.post(this.URL+"addsliders" , value); 
    }
	
	getSlider(id){
		return this.http.get(this.URL+"getslider/"+id);
	}
	
	editSliders(value){
		return this.http.post(this.URL+"edit/sliders/:id" , value);
	}
	
	list(){
		return this.http.get(this.URL+"sliders");
	}
	
	remove(id){
		return this.http.get(this.URL+"removesliders/:id" , id);
	}
}
