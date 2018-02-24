import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideraddComponent } from '../slideradd/slideradd.component';
import { SlidereditComponent } from '../slideredit/slideredit.component';
import { SliderviewComponent } from '../sliderview/sliderview.component';  
import { SliderComponent } from '../slider/slider.component'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
	CommonModule
  ],
  declarations: [
    SliderComponent,
	SlideraddComponent,
	SlidereditComponent,
	SliderviewComponent	
  ],
  exports: [
    SliderComponent,
	SlideraddComponent,
	SlidereditComponent,
	SliderviewComponent	
  ],
})

export class SlidersModule { }
