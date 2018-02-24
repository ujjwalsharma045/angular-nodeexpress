import { Component, OnInit, ViewChild, Directive, ElementRef, HostListener, Input  } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { PagerService } from '../services/pager.service';
import { BsModalComponent } from 'ng2-bs3-modal';
import { AppGlobals } from '../services/app.global';
import { PageService } from '../services/page.service';

@Component({
  selector: 'pages-cmp',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers:[PagerService , AppGlobals , PageService],
})


export class PagesComponent implements OnInit {
	searchForm:FormGroup;
	private pagedetail;
	private pageid;
    private searchcontent = "";
    private allItems: any; 
    private pageSize: any; 
    private currentPage = 1;
    private sortreverse = true;  
    public flashMessage;
    pager: any = {};
    private submitted =false;
    pagedItems: any[];
	private search = {	   
       page:1,
       sortfield:'_id',     	
       sorttype:'asc',
       searchcontent:''	   
    };
    private deletedpageid;
    private sectionTitle = 'Pages';
    private pageUrl = '';
    private isLogin;
	@ViewChild('myModal')
	modal: BsModalComponent;
	
    constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder , private http:HttpClient , private pagerService:PagerService , private _global:AppGlobals , private pageservice:PageService) { 
	   this.searchForm = formBuilder.group({      
			'searchcontent':[null, Validators.required]      			
       });
	   this.pageUrl = _global.baseApiUrl;
	   this.isLogin = true;
	}

    ngOnInit() {		
	   this.flashMessage = localStorage.getItem('message');
       localStorage.removeItem('message');	  
	   this.pagedetail = this.pageList("");	  
    }
	
	pageList(data){
	    if(data!=""){
            //alert("ch"); 		  
		    this.getPages(data);
	    }
	    else {		  
	        //alert("fg");
		    this.getPages(data)
	    }
    } 
  
    getPages(data){
		if(data!=""){		
		    //alert("fgvb");	  
			let params = new URLSearchParams();
			for(let key in data){
				params.set(key, data[key]) 
			}
			
			return this.pageservice.lists(this.pageUrl , params.toString()).subscribe(result => {			   
			   this.pagedetail  = result['records'];
			   this.allItems = result['totalrecords'];
			   this.pageSize = result['totalpages'];
			   this.setPage(this.currentPage);
		    }); 
		}
		else { 		    
			return this.http.get(this.pageUrl+"page/index").subscribe(result => {
			   this.pagedetail  = result['records'];
			   this.allItems = result['totalrecords'];
			   this.pageSize = result['totalpages'];
			   this.setPage(this.currentPage);
		    });
		}	  
    }
 
    deletePageConfirm(pageid){
		this.deletedpageid = pageid;
		this.modal.open();
	}
	
    deletePage(){
		this.modal.close();
		this.remove(this.deletedpageid).subscribe(result => {
		    if(result['success']=="1"){
			  location.reload();
		    }		   
	    });
	}
	
	remove(pageid){
		return this.http.delete(this.pageUrl+"page/delete/"+pageid);
	}
	
	setPage(page: number) {
	    if(page < 1 || page > this.pager.totalPages){
		   return;
	    }	  
	  	  	  
	    // get pager object from service
	    this.pager = this.pagerService.getPager(this.allItems, page, this.allItems/this.pageSize);       	  
    }

    searchPage(){	        
        this.currentPage = 1;
	    this.search.page = this.currentPage;
		this.submitted = true;
		if(this.searchForm.valid){
           this.search.searchcontent  = this.searchForm.value.searchcontent;			
		   this.pageList(this.search);
		}
    }
  
    paging(pageno){	  
        this.currentPage = pageno;
	    this.search.page = pageno;
	    this.pageList(this.search);
    }

    sortlist(field){
	    if(this.search.sortfield==field){
			  if(this.sortreverse){
				this.sortreverse = false;
				this.search.sorttype = 'desc';
			  }
			  else { 
				this.sortreverse = true;
				this.search.sorttype = 'asc';			
			  }
	    }
	    else {
	         this.search.sortfield = field;
		     this.sortreverse = true;
		     this.search.sorttype = 'asc';
	    }
	  
	    this.search.page = this.currentPage;
	    this.pageList(this.search);
    }	
}
