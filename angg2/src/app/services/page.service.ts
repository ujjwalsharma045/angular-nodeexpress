import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class PageService {
    private userUrl = 'http://localhost:8081/';
	private pageUrl = '';
    constructor(private http:HttpClient) { }
  
    getView(pageurl , pageid){	
       return this.http.get(pageurl+"page/view/"+pageid); 	
    }
	
	add(pageurl , pagedata){
		return this.http.post(pageurl+"page/add" , pagedata);
	}
	
	edit(pageurl , pageid , pagedata){
		return this.http.post(pageurl+"page/edit/"+pageid , pagedata);
	}
	
	lists(pageurl , pagedata){
		return this.http.get(pageurl+"page/index?"+pagedata);
	}
}
