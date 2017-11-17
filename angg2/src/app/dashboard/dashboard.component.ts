import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {HttpClient} from '@angular/common/http';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
	
	siteUrl = 'http://localhost:8081/';
	private totaluser;
	private totalpage;
	private totalcategory;
	private totalproduct;
	constructor(private http: HttpClient) { 
	
	}
	
    ngOnInit(){
        
		
		this.getTotalUser().subscribe(result => {
		    //console.log(result['users']);
		    this.totaluser  = result['users'];	 	   
	    });
		
		this.getTotalPage().subscribe(result => {
		    //console.log(result['pages']);			
		    this.totalpage  = result['pages'];	 	   
	    });

        this.getCategoryCount().subscribe(result => {
		    //console.log(result['pages']);			
		    this.totalcategory  = result['categories'];	 	   
	    });

        this.getProductCount().subscribe(result => {
		    //console.log(result['pages']);			
		    this.totalproduct  = result['products'];	 	   
	    });  		
    }
	
	getTotalUser(){
	    return this.http.get(this.siteUrl+"totalusers");
	}

	getTotalPage(){
		return this.http.get(this.siteUrl+"page/total");
	}
	
	getCategoryCount(){
		return this.http.get(this.siteUrl+"category/total");
	}
	
	getProductCount(){
		return this.http.get(this.siteUrl+"product/total");
	}
}
