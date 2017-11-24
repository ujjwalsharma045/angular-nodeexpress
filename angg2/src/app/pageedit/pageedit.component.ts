import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {PageService} from '../services/page.service';
import {AppGlobals} from '../services/app.global';
@Component({
  selector: 'pageedit-cmp',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css'],
  providers:[PageService]
})

export class PageeditComponent implements OnInit {
	
	public page = {};   
    private pageForm: FormGroup;
    private submitted = false;
    private sectionTitle = 'Add Page';
    private fileList:any;
    private pageUrl = "";
	
    private pageid;
	private flashMessage;
 
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private pageservice:PageService, private _global:AppGlobals) { 
	    this.pageForm = formBuilder.group({      
		    'title':[null, Validators.required], 
			'content':[null, Validators.required],
			'status':[null, Validators.required]			
        });
		
		this.pageUrl = _global.baseApiUrl;
	}

    ngOnInit(){
	    this.route.params.subscribe(params => {
            this.pageid = params['id'];
        });
		
		this.getPage(this.pageid).subscribe(result => {
		   console.log(result['records'][0]);
		   this.pageForm.patchValue(result['records'][0]);	 	   		  
	    });
    }
	
	pageEdit(){
	    this.submitted = true;
        if(this.pageForm.valid){
		    this.pageservice.edit(this.pageUrl , this.pageid , this.pageForm.value).subscribe(result => {
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
	
	getPage(id){		
	    return this.http.get(this.pageUrl+"page/view/"+id);
    }
}
