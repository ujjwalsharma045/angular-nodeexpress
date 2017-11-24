import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../services/app.global';
import {PageService} from '../services/page.service';
@Component({
  selector: 'pageadd-cmp',
  templateUrl: './pageadd.component.html',
  styleUrls: ['./pageadd.component.css'],
  providers:[PageService]
})

export class PageaddComponent implements OnInit {
    pageForm:FormGroup;
    private submitted =false;
	pageUrl = "";
	private flashMessage;
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private _global:AppGlobals , private pageservice:PageService) { 
        this.pageForm = formBuilder.group({      
			'title':[null, Validators.required],      
			'content':[null, Validators.required],
			'status':[null, Validators.required]			
        });  
		this.pageUrl = _global.baseApiUrl;
    }

    ngOnInit() {
		
    }

    pageAdd(){
	    this.submitted =true;
	    if(this.pageForm.valid){
		    this.pageservice.add(this.pageUrl , this.pageForm.value).subscribe(result => {
				  //console.log(result);
				  if(result['success']=="1"){
					 localStorage.setItem('message' , result['message']); 
					 this.router.navigate(['./pages']);	  
				  }
				  else if(result['error']=="1"){
					 this.flashMessage = result['message'];				 
				  }
			});
	    } 
    }
}
