import { Component , VERSION} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
	
	private isLogin:boolean;
	
	constructor(private route: ActivatedRoute, private router: Router){
 	    console.log(VERSION.full);
		if(!localStorage.getItem('is_loggedin')){
			//alert("ee");
            this.isLogin = false; 
		}
		else { 
		    //alert("gg");
			this.isLogin = true; 
		}
	}
	
	ngOnInit() {		
    }
}
