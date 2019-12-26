import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GetdatanodesqlService } from '../getdatanodesql.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 StudentProfileForm: FormGroup;
 data;
  constructor(private fb: FormBuilder,private dataservice : GetdatanodesqlService) { }
  ngOnInit() {
    this. addDetailsForm()
  }
  addDetailsForm(){
    this.StudentProfileForm = this.fb.group({
      Name: ['',Validators.required ],
      CLass: ['',Validators.required],
      Roll : ['',Validators.required],
      Rank : ['',Validators.required]
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // }),
  })

}

sendtudentDetails(){
console.log(this.StudentProfileForm.value);
if(this.StudentProfileForm.valid){
  this.dataservice.addData(this.StudentProfileForm.value).subscribe(res=>{
    console.log(res)
  window.alert("You'r Student Record is submitted");
  })
}
}
}
