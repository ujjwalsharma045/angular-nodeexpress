import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalModule } from 'ng2-bs3-modal';
import { StatusformatPipe } from '../pipe/statusformat.pipe';
import { OrderformatPipe } from '../orderformat.pipe';
import { CKEditorModule } from 'ng2-ckeditor';
import { Directive7Directive } from '../directives/directive7.directive';
import { HoveringDirective } from '../directives/directives2';
import { ShowcategoyListDirective } from '../directives/directives5';
import { Directive8Directive } from '../directives/directive8.directive';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { CostPriceComparisionPipe } from '../cost-price-comparision.pipe';
import { RangeDirective } from '../range.directive';

@NgModule({
  imports: [
    CommonModule,
	RouterModule,
	FormsModule, 
	ReactiveFormsModule,
	BsModalModule,
	CKEditorModule
  ],
  declarations: [
    Directive7Directive,
	HoveringDirective,
	ShowcategoyListDirective,
	StatusformatPipe,
	Directive8Directive,
	SafeHtmlPipe,
	OrderformatPipe,
	CostPriceComparisionPipe,
	RangeDirective
  ],
  exports:[
    RouterModule,
	FormsModule, 
	ReactiveFormsModule,
	BsModalModule,
	CKEditorModule,
	Directive7Directive,
	HoveringDirective,
	ShowcategoyListDirective,
	StatusformatPipe,
	Directive8Directive,
	SafeHtmlPipe,
	OrderformatPipe,
	CostPriceComparisionPipe,
	RangeDirective
  ]
})

export class SharedModule { }
