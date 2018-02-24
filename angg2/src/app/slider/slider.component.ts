import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SlidersService } from '../sliders.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[SlidersService]
})

export class SliderComponent implements OnInit {
  
    private slideraddForm:NgForm;
	private submitted = false;
	private sliders:any[] = ['1'];
	
	 
    constructor(private slidersService:SlidersService) { 
  
    }
  
    ngOnInit() {
		
    }
	
	addSlider(f){
		this.submitted =true;
		//console.log(this.slideraddForm);
		if(f.valid){
			this.slidersService.addSliders(f.value).subscribe(function(res){ 
			
			});
		}
	}
	
	addBlock(){
	    this.sliders.push(1);	
	}
	
	removeSlider(index){
		this.sliders.splice(index , 1);	
	}
}
