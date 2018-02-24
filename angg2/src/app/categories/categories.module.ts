import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorylistComponent } from '../categorylist/categorylist.component';
import { CategoryaddComponent } from '../categoryadd/categoryadd.component';
import { CategoryeditComponent } from '../categoryedit/categoryedit.component';
import { CategoryviewComponent } from '../categoryview/categoryview.component';
import { SharedModule } from '../shared/shared.module';
import { NumberconvertPipe } from '../numberconvert.pipe';
import { RedhighlightPipe } from '../redhighlight.pipe'; 

@NgModule({
  imports: [
    CommonModule,
	SharedModule 
  ],
  declarations: [
    CategorylistComponent,
	CategoryaddComponent,
	CategoryeditComponent,
	CategoryviewComponent,
    NumberconvertPipe,
    RedhighlightPipe,
    //SafeHtmlPipe	
  ],
  exports:[
    CategorylistComponent,
	CategoryaddComponent,
	CategoryeditComponent,
	CategoryviewComponent,
    NumberconvertPipe,
    RedhighlightPipe,
    //SafeHtmlPipe	
  ]
})
export class CategoriesModule { }
