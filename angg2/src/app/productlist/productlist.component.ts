import { Component, OnInit , ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { BsModalComponent } from 'ng2-bs3-modal';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {
  private productdetail = [];
  searchForm:FormGroup;
  private search = {
	  sortfield:'title',
	  searchcontent:''
  };
  @ViewChild("Productconfirm")
  popup:BsModalComponent;
  private submitted;
  private urls;
  private deleteproductid;
  pager: any = {};
  private flashMessage;
  private siteUrl = "http://localhost:8081/";
  constructor(private route:ActivatedRoute ,private router:Router, private http:HttpClient, private formBuilder: FormBuilder) { 
       this.searchForm = formBuilder.group({
		   'searchcontent':[null , Validators.required]
	   });
  }

    ngOnInit() {
	    this.flashMessage = localStorage.getItem('message');
	    localStorage.removeItem('message');
	    this.getProducts("");
    }
  
    remove(){
	    this.popup.close();
	    this.http.delete(this.siteUrl+"product/delete/"+this.deleteproductid).subscribe(result=>{
		    if(result['success']==1){
				location.reload(); 
			}
	    });
    }
  
  sortlist(field){
	  
  }
  
  getProducts(data){
	    if(data!=""){
		  let params = new URLSearchParams();
		  for(let key in data){
			  params.set(key , data[key]);
		  }
		  //alert(params.toString());
		  this.urls = this.siteUrl+"product/index?"+params.toString();		  
	    }
	    else {
		  this.urls = this.siteUrl+"product/index";
	    }
	  
	    this.http.get(this.urls).subscribe(result=>{
	        if(result['success']=="1"){              
			  this.productdetail = result['records'];
			  console.log(this.productdetail);
		    }    
	    });
  }
  
  searchProduct(){
	    this.submitted = true;
	    if(this.searchForm.valid){
		  this.search.searchcontent = this.searchForm.value.searchcontent;
		  this.getProducts(this.search);
	    }
  }
  
  deleteproductConfirm(id){
	    this.deleteproductid = id;
	    this.popup.open();
  }
}
