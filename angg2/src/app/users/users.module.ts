import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UseraddComponent } from '../useradd/useradd.component';
import { UsereditComponent } from '../useredit/useredit.component';
import { UserviewComponent } from '../userview/userview.component'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
	SharedModule
  ],
  declarations: [
    UsersComponent,
	UseraddComponent,
	UsereditComponent,
	UserviewComponent	
  ],
  providers:[
  
  ],
  exports:[
    UsersComponent,
	UseraddComponent,
	UsereditComponent,
	UserviewComponent    
  ]
})
export class UsersModule { }
