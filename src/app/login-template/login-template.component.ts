import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  username: string = "";
  password: string = "";
  public formData: FormGroup = new FormGroup(
    {
      username1: new FormControl(''),
      password1: new FormControl('')
    });

  public formData2: any = this.formBuilder.group(
    {
      username2: ['', Validators.required],
      password2: ['', Validators.required]
    }
  );


  ngOnInit(): void {

  }

  submitForm() {
    console.clear();
    //console.log('username: ' + this.username + ', password: ' + this.password);
    //console.log('username: ' + this.formData.controls['username'] + ', password: ' + this.formData.controls['password']);
    console.log('username1 submit: ',this.formData.value.username1);
    console.log('username2 submit: ', this.formData2.value.username2);
  }
  //cach 1: su dung bien, su kien click()
  //cach 2: (ngSubmit) = "submitForm()"
  //uu diem: de su dung

  //cach 3: reactive- form, su dung formcontrol va form group, 
  // muon thay doi du lieu cua input su dung formControlName="username"

  // cach 4: su dung formbuilder : FormBuilder tiem vao
  // sau do su dung formData2 = this.formBuilder.group(username2:['', validators.required])
  // uu diem co them validator

}
