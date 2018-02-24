import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AppGlobals} from '../services/app.global';

@Injectable()
export class GuestuserService implements CanActivate{

    constructor(private router: Router, private _global:AppGlobals) { }
	
    canActivate(){
	    if(!localStorage.getItem('is_loggedin')){           		
           return true;
		}
		else {		   	
		   this.router.navigate(['./dashboard']);
		   return false;
		}
    }

}
