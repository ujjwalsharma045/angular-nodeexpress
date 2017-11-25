import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes , LoginRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import {HttpClientModule} from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { Md2Module }  from 'md2';
import { FocusingDirective } from './directives/directives';
import { LinkhoveringDirective } from './directives/directives3';
import { BoldDirective } from './directives/directives4';
//import { ServiceComponent } from './service/service.component';
//import { ServiceeditComponent } from './serviceedit/serviceedit.component';
import { AppGlobals } from './services/app.global';
import { PageService } from './services/page.service'; 
//import {PopupModule} from 'ng2-opd-popup';
//import {DatePickerModule} from 'ng2-datepicker-bootstrap';
//import {ModalModule} from "ng2-modal";

@NgModule({
  imports: [
    BrowserModule,
	UsersModule,
	PagesModule,
	CategoriesModule,
	ProductsModule,
	//BrowserAnimationsModule,
	HttpModule,
    RouterModule.forRoot(AppRoutes),
	RouterModule.forRoot(LoginRoutes),
	//PopupModule.forRoot(),	
	//PopupModule, 
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
	HttpClientModule,
	ReactiveFormsModule,
	FormsModule,
	//ModalModule,
    //DatePickerModule,    
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),	
	Md2Module,	  
  ],	
  declarations: [
    AppComponent,	
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,   
    UpgradeComponent,	       
    SettingsComponent,
    AdminloginComponent,
    Sidebar2Component,
    HeaderComponent,
    RegisterComponent,	        
	FocusingDirective,	
	LinkhoveringDirective,
	BoldDirective,	
	//ServiceComponent,
	//ServiceeditComponent,	
  ],  
  providers: [AppGlobals , PageService],
  bootstrap: [AppComponent],
  exports:[    
  ]
})
export class AppModule { }
