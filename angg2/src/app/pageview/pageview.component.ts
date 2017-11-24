import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {PageService} from '../services/page.service';
import { AppGlobals } from '../services/app.global';

@Component({
  selector: 'pageview-cmp',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css'],
  providers:[PageService , AppGlobals]
})

export class PageviewComponent implements OnInit {
	
	private pageid;
	private pageDetail = {};
	private sectionTitle = 'View Page';
	private pageUrl = '';
	
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private pageservice:PageService, private _global:AppGlobals) { 
	   this.pageUrl = _global.baseApiUrl;
	}
  
    ngOnInit() {
	    this.route.params.subscribe(params => {
           this.pageid = params['id'];
        });
		
		this.sectionTitle = this.sectionTitle+' '+this.pageid;
		this.pageservice.getView(this.pageUrl , this.pageid).subscribe(result => {
			//console.log(result);			
			this.pageDetail = result['records'][0];			   
		});
    }
}
