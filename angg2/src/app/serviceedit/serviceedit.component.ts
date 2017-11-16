import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-serviceedit',
  templateUrl: './serviceedit.component.html',
  styleUrls: ['./serviceedit.component.css']
})

export class ServiceeditComponent implements OnInit {
    
    private submitted = false;
    private service;  
	
    constructor() { }

    ngOnInit(){ 
		this.service = {
			title:'dd',
			content:'ff',
			status:'A',
			usertype:'A',
			users:'A',
		} 
    }
    
    serviceEdit(serviceForm){
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
