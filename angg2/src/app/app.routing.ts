import { Routes } from '@angular/router';
import { SidebarComponent }   from './sidebar/sidebar.component';
import { NavbarComponent }   from './shared/navbar/navbar.component';
import { FooterComponent }   from './shared/footer/footer.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UsersComponent } from './users/users.component'; 
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';

import { PagesComponent } from './pages/pages.component'; 
import { PageaddComponent } from './pageadd/pageadd.component';
import { PageeditComponent } from './pageedit/pageedit.component';
import { PageviewComponent } from './pageview/pageview.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

import { ProductaddComponent } from './productadd/productadd.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { CategoryeditComponent } from './categoryedit/categoryedit.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
//import { ServiceComponent } from './service/service.component';
//import { ServiceeditComponent } from './serviceedit/serviceedit.component';
import { AuthguardService } from './__guards/authguard.service';
import { GuestuserService } from './__guards/guestuser.service';
import { SliderComponent } from './slider/slider.component';
import { SlideraddComponent } from './slideradd/slideradd.component';
import { SliderviewComponent } from './sliderview/sliderview.component';
import { SlidereditComponent } from './slideredit/slideredit.component';
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate:[AuthguardService]		
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
		data : {title : 'Dashboard'},
		children:[
		   { path: '', component:SidebarComponent, outlet:'sidebar'}, 
           { path: '', component:NavbarComponent, outlet:'navbar'},
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[AuthguardService]
    },
    /*{
        path: 'user',
        children:[
		   { path: 'add', component:UseraddComponent, data : {somedata : 'some value'}}, 
           { path: 'edit/:id', component:UsereditComponent},
           { path: 'view/:id', component:UserviewComponent}
		],		
    },*/
	{
        path: 'user/add',
        component:UseraddComponent, 
		data:{title:'Add User'},
		canActivate:[AuthguardService]
    },
	{
        path: 'user/edit/:id',
		component:UsereditComponent, 
		data:{title:'Edit User'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'user/view/:id',
		component:UserviewComponent, 
		data:{title:'View User'},
        canActivate:[AuthguardService]		
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }, 
	{
        path: 'users',
        component: UsersComponent,
		data:{title:'Users'},
		children:[
		   { path: '', component:SidebarComponent, outlet:'sidebar'}, 
           { path: '', component:NavbarComponent, outlet:'navbar'},
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[AuthguardService]
    },
	{
        path: 'pages',
        component: PagesComponent,
		data:{title:'Pages'},
		children:[
		   { path: '', component:SidebarComponent, outlet:'sidebar'}, 
           { path: '', component:NavbarComponent, outlet:'navbar'},
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[AuthguardService]
    },
	/* {
        path: 'page',
		children:[
		   { path: 'add', component:PageaddComponent}, 
           { path: 'edit/:id', component:PageeditComponent},
           { path: 'view/:id', component:PageviewComponent}
		],
    }, */
    {
        path: 'page/add',
		component:PageaddComponent,
		data:{title:'Add Page'},
        canActivate:[AuthguardService]		
    },
    {
        path: 'page/edit/:id',
		component:PageeditComponent,
		data:{title:'Edit Page'},
        canActivate:[AuthguardService] 		
    },
    {
        path: 'page/view/:id',
		component:PageviewComponent,
		data:{title:'View Page'},
        canActivate:[AuthguardService]		
    },	
	{
        path: 'settings',
        component: SettingsComponent,
		data:{title:'Settings'},
		canActivate:[AuthguardService]		
    },
	{
        path: 'login',
        component: AdminloginComponent,
		data:{title:'Sign-In'},
		children:[
		   { path: '', component:HeaderComponent, outlet:'header'},            
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[GuestuserService]
    },
	{
        path: 'register',
        component: RegisterComponent,
		data:{title:'Sign-Up'},
		children:[
		   { path: '', component:HeaderComponent, outlet:'header_guest'},            
           { path: '', component:FooterComponent, outlet:'footer_guest'}
		],
		canActivate:[GuestuserService]
    },	
	{
        path: 'product/add',
		component:ProductaddComponent,
		data:{title:'Add Product'},
        canActivate:[AuthguardService] 		
    },
    {
        path: 'product/edit/:id',
		component:ProducteditComponent,
		data:{title:'Edit Product'},
        canActivate:[AuthguardService]		
    },
    {
        path: 'product/view/:id',
		component:ProductviewComponent,
		data:{title:'View Product'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'products',
        component: ProductlistComponent,
		data:{title:'Products'},
		children:[
		   { path: '', component:SidebarComponent, outlet:'sidebar'}, 
           { path: '', component:NavbarComponent, outlet:'navbar'},
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[AuthguardService]
    },
	{
        path: 'category/add',
		component:CategoryaddComponent,
		data:{title:'Add Category'},
        canActivate:[AuthguardService]		
    },
    {
        path: 'category/edit/:id',
		component:CategoryeditComponent,
		data:{title:'Edit Category'},
        canActivate:[AuthguardService]		
    },
    {
        path: 'category/view/:id',
		component:CategoryviewComponent,
		data:{title:'View Category'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'category',
        component: CategorylistComponent,
		data:{title:'Category'},
		children:[
		   { path: '', component:SidebarComponent, outlet:'sidebar'}, 
           { path: '', component:NavbarComponent, outlet:'navbar'},
           { path: '', component:FooterComponent, outlet:'footer'}
		],
		canActivate:[AuthguardService] 
    },
	{
        path: 'slider',
		component:SlideraddComponent,
		data:{title:'Add Slider'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'slider/add',
		component:SliderComponent,
		data:{title:'Slider'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'slider/view/:id',
		component:SliderviewComponent,
		data:{title:'View Slider'},
        canActivate:[AuthguardService]		
    },
	{
        path: 'slider/edit/:id',
		component:SlidereditComponent,
		data:{title:'Edit Slider'},
        canActivate:[AuthguardService]		
    },
	/* {
        path: 'service/add',
		component:ServiceComponent,
		data:{title:'Add Service'}		
    },
	{
        path: 'service/edit/:id',
		component:ServiceeditComponent,
		data:{title:'Edit Service'}		
    },*/
]

export const LoginRoutes: Routes = [    
	/*{
        path: 'login',
        component: AdminloginComponent, 
		children:[
		   { path: '', component:HeaderComponent, outlet:'header'},
           { path: '', component:FooterComponent, outlet:'footer'}
		]
    }*/
]
