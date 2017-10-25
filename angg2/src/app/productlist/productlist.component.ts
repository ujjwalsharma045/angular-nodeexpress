import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';

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
  private submitted;
  private urls;
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
  
  remove(productid){
	  this.http.delete(this.siteUrl+"product/delete/"+productid).subscribe(result=>{
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
}
