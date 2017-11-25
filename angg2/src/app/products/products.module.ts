import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductaddComponent } from '../productadd/productadd.component';
import { ProducteditComponent } from '../productedit/productedit.component';
import { ProductviewComponent } from '../productview/productview.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
	SharedModule
  ],
  declarations: [
    ProductaddComponent,
	ProducteditComponent,
	ProductviewComponent,
	ProductlistComponent
  ],
  exports:[
    ProductaddComponent,
	ProducteditComponent,
	ProductviewComponent,
	ProductlistComponent
  ]
})

export class ProductsModule { 

}
