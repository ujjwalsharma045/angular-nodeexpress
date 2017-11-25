import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageaddComponent } from '../pageadd/pageadd.component';
import { PageeditComponent } from '../pageedit/pageedit.component';
import { PageviewComponent } from '../pageview/pageview.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
	SharedModule
  ],
  declarations: [
    PagesComponent,
	PageaddComponent,
	PageeditComponent,
	PageviewComponent	
  ],
  exports:[
    PagesComponent,
	PageaddComponent,
	PageeditComponent,
	PageviewComponent
  ]
})
export class PagesModule { }
