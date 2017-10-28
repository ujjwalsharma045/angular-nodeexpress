import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl , AbstractControl} from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'useradd-cmp',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})

export class UseraddComponent implements OnInit {
    
	public user = {}; 
    
    userForm: FormGroup;
	Observable:any;
    private submitted = false;
    private sectionTitle = 'Add User';
	private fileList:any = [];
	private flashMessage;
	userUrl = "http://localhost:8081/";
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { 
        this.userForm = formBuilder.group({      
			'username':[null, Validators.required],      
			'email':[null, Validators.required],
			'password':[null, Validators.required],
			'confirm_password':[null, Validators.required],
			'first_name':[null, Validators.required],
			'last_name':[null, Validators.required],
			'address' : [null, Validators.required],
			'image':[null],
		    'city' : [null, Validators.required],
		    'state' : [null, Validators.required],
			'zipcode' : [null]
        },{validator:this.matchPassword});
    }

    ngOnInit() {
	      
    }
	
	userAdd(){
	    this.submitted = true;	      
	    if(this.userForm.valid){ 
		        /* this.http.post(this.userUrl+"adduser" , this.userForm.value).subscribe(result => {
				   if(result['success']=="1"){
					 localStorage.setItem('message' , result['message']);
					 this.router.navigate(['./users']);	  
				   }
			    });  

            	this.http.post(this.userUrl+"adduser" , this.userForm.value).subscribe(result => {
				   if(result['success']=="1"){
					  localStorage.setItem('message' , result['message']);
					  this.router.navigate(['./users']);	  
				   }
			    }); */ 

                this.savedata().subscribe(result => {				
					if(result.success=="1"){
						this.router.navigate(['./users']);	  
					}
					else if(result['error']=="1"){
					    this.flashMessage = result['message'];
				    }
			   }); 				
	    }		
    }
	
	fileChange(fileInput:any){
		this.fileList = fileInput.target.files;
	}
		
	matchPassword(AC:AbstractControl){
		let passwordfield = AC.get('password').value;
		let confirm_password = AC.get('confirm_password').value;
		if(passwordfield!="" && confirm_password!="" && passwordfield!=confirm_password){
			AC.get('confirm_password').setErrors({mismatch:true});
		}
		else {			
			return null
		}
	}
	
	savedata():Observable<any>{
	   //console.log(this.fileList[0].name);
	   return Observable.create(observer => {
					let formData: FormData = new FormData(),
					xhr: XMLHttpRequest = new XMLHttpRequest();
										
					if(this.userForm.value.username){
					   formData.append("username", this.userForm.value.username);
					}
					
					if(this.userForm.value.password){
					   formData.append("password", this.userForm.value.password);
					}
					
					if(this.userForm.value.first_name){
					   formData.append("first_name", this.userForm.value.first_name); 
					}
					
					if(this.userForm.value.last_name){
					   formData.append("last_name", this.userForm.value.last_name);
					}
					
					if(this.userForm.value.email){
					   formData.append("email", this.userForm.value.email);					
					}
					
					if(this.userForm.value.address){
					   formData.append("address", this.userForm.value.address);
					}
					
					if(this.userForm.value.city){
					  formData.append("city", this.userForm.value.city);
					}
					
					if(this.userForm.value.state){
					   formData.append("state", this.userForm.value.state);
					}
					
					if(this.userForm.value.zipcode){
					   formData.append("zipcode", this.userForm.value.zipcode);
					}
					
					//alert(this.fileList.length);
					if(this.fileList.length>0){
					   formData.append("files", this.fileList[0], this.fileList[0].name);
					}
					
					xhr.onreadystatechange = () => {
						if(xhr.readyState === 4){
							if(xhr.status === 200){
								observer.next(JSON.parse(xhr.response));
								observer.complete();
							} 
							else {
								observer.error(xhr.response);
							}
						}
					};

					/*hr.upload.onprogress = (event) => {
						this.progress = Math.round(event.loaded / event.total * 100);
						this.progressObserver.next(this.progress);
					};*/
					
					console.log(formData);					
					xhr.open('POST', this.userUrl+'adduser', true);
					xhr.send(formData);
		});
    }
}
