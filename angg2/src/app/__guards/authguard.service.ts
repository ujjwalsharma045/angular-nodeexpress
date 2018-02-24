import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AppGlobals} from '../services/app.global';

@Injectable()
export class AuthguardService implements CanActivate{

    constructor(private router: Router, private _global:AppGlobals) { }
  
    canActivate(){
	    if(localStorage.getItem('is_loggedin')){
			//alert("3");
           return true;
		}
		else {
		   	//alert("4");
		   this.router.navigate(['./login']);
		   return false;
		}
    }
}
