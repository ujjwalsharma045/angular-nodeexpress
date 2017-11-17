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
	
    constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient) { 
	
	}
	
    private service;
	private serviceUrl = "http://localhost:8081/";
	
    ngOnInit() {
		this.service = {
			
		}
    }

    serviceAdd(serviceForm){		
		this.submitted = true;
		if(serviceForm.valid){
			var service = serviceForm.value;
		   	return this.http.post(this.serviceUrl+"faqs/add" , service).subscribe(result => {
			    if(result['success']=="1"){
				   
			    }
		    });
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
