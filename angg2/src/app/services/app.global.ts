import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals  {
    readonly baseApiUrl: string = 'http://localhost:8081/';
	readonly Appname: string = 'Admin Panel';
}
