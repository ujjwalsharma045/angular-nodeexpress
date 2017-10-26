import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl , AbstractControl} from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'useredit-cmp',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

    public user = {};   
    private userForm: FormGroup;
    private submitted = false;
    private sectionTitle = 'Add User';
    private fileList:any = [];
    userUrl = "http://localhost:8081/";
    private userid = "";
    private userimage;	
	private flashMessage = "";
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
        this.userForm = formBuilder.group({      
			'first_name':[null, Validators.required],
			'last_name':[null, Validators.required],
			'password':[""],
			'confirm_password':[""],
			'address' : [null, Validators.required],
			'userpic':[null],
		    'city' : [null, Validators.required],
		    'state' : [null, Validators.required],
			'zipcode' : [null]
        },{validator:this.checkPassword});	    
    }

    ngOnInit() {
		this.route.params.subscribe(params => {
            this.userid = params['id'];
        });
		
		this.getUser(this.userid).subscribe(result => {
		   console.log(result['records'][0]);
		   this.userForm.patchValue(result['records'][0]);
           this.userimage = result['filepath'];		   
	    });
    }
  
    userEdit(){
	    this.submitted = true;
        if(this.userForm.valid){
		    /*this.http.post(this.userUrl+"edit/"+this.userid , this.userForm.value).subscribe(result => {
				if(result['success']=="1"){
					localStorage.setItem('message' , result['message']);
					this.router.navigate(['./users']);	  
				}
			});*/

            this.savedata(this.userid).subscribe(result => {
				if(result['success']=="1"){
					localStorage.setItem('message' , result['message']);
					this.router.navigate(['./users']);	  
				}
				else if(result['error']=="1"){
					this.flashMessage = result['message'];
				} 
			});			
	    }	   
    }
	
	getUser(id){		
	    return this.http.get(this.userUrl+"view/"+id);
    }

	checkPassword(AC:AbstractControl){
	   let passwordstrng = AC.get('password').value;
       let confirmpasswordstrng = AC.get('confirm_password').value;
	   AC.get('password').setErrors(null);
	   AC.get('confirm_password').setErrors(null);
	   if(passwordstrng!=""){
		   if(confirmpasswordstrng==""){
		       AC.get('confirm_password').setErrors({required:true});
		   }
		   else if(confirmpasswordstrng!=passwordstrng){
		      AC.get('confirm_password').setErrors({mismatch:true});
		   }
		   else {
			  return null; 
		   }
	   }
	   else if(confirmpasswordstrng!=""){
		   if(passwordstrng==""){
		      AC.get('password').setErrors({required:true});
		   }
		   else if(confirmpasswordstrng!=passwordstrng){
		      AC.get('confirm_password').setErrors({mismatch:true});
		   }
		   else {
			  return null; 
		   }
	   }
	   else {		   
		   return null;
	   }        	  
	}
 
    fileChange(fileInput:any){
		this.fileList = fileInput.target.files;
	}
				
    savedata(id):Observable<any>{
	   //console.log(this.fileList[0].name);
	   return Observable.create(observer => {
				let formData: FormData = new FormData(),
				xhr: XMLHttpRequest = new XMLHttpRequest();
																											
				if(this.userForm.value.first_name){
				   formData.append("first_name", this.userForm.value.first_name); 
				}
				
				if(this.userForm.value.last_name){
				   formData.append("last_name", this.userForm.value.last_name);
				}
				
				if(this.userForm.value.password){
				   formData.append("password", this.userForm.value.password);
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
				
				alert(this.fileList.length);
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
				xhr.open('POST', this.userUrl+'edit/'+id, true);
				xhr.send(formData);
		});
    } 
}
