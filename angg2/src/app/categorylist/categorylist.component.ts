import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { BsModalComponent } from 'ng2-bs3-modal';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'],
})

export class CategorylistComponent implements OnInit {
      
    searchForm:FormGroup;
    
    private siteUrl = "http://localhost:8081/";
    
    private categoryDetail = "";  
    
    private search = {
	  sortfield:'_id',
	  searchcontent:''
    };
    
    private pager: any = {};
    private submitted = false;
    private flashMessage = "";
    private urls;
    private categorydeleteid;
  
    @ViewChild('myModal')
    modal: BsModalComponent;  
  
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { 
        this.searchForm = formBuilder.group({
		   'searchcontent':[null , Validators.required]
	    });
    }

    ngOnInit() {	  
	    this.flashMessage = localStorage.getItem('message'); 
	    localStorage.removeItem('message');
	    this.getCategories("");
    }
  
    getCategories(data){
	    if(data!=""){
		    let params = new URLSearchParams();
		    for(let key in data){
			   params.set(key , data[key]);
		    }
		    //alert(params.toString());
		    this.urls = this.siteUrl+"category/index?"+params.toString();
	    }
	    else {
		    this.urls = this.siteUrl+"category/index";
	    }
	  
	    this.http.get(this.urls).subscribe(result=>{
		    if(result['success']=="1"){			  
			   this.categoryDetail = result['records'];
		    }
	    });
    }
  
    remove(){
        this.modal.close();		 		
	    this.http.delete(this.siteUrl+"category/remove/"+this.categorydeleteid).subscribe(result=>{
	        if(result['success']=="1"){
			   location.reload();
		    }
	    });
    }
  
    sortlist(fieldname){
	  
    }
  
    searchCategory(){
	    this.submitted = true;
	    if(this.searchForm.valid){
		   this.search.searchcontent = this.searchForm.value.searchcontent;		  
		   this.getCategories(this.search);
	    }
    }
	
	deletecategoryConfirm(id){
	    this.categorydeleteid = id;
        this.modal.open();		
	}
}
