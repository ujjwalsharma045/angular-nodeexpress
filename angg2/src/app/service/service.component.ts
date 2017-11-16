import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {
     
	private submitted = false; 
    constructor() { }
    private service;
	
    ngOnInit() {
		this.service = {
			
		}
    }

    serviceAdd(serviceForm){		
		this.submitted = true;
		if(serviceForm.valid){
		   	
		}	    	 
    }
	
	setUsers(serviceForm){		
		if(serviceForm.value.usertype == "G"){			
		    this.service.users = "";
            this.service.userslist = "";			            
		}				
	}
	
	setUserType(serviceForm){
		if(serviceForm.value.users == "A"){		    
            this.service.userslist = "";			            
		}
	}
}
