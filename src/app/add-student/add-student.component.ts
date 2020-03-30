import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GetdatanodesqlService } from '../getdatanodesql.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 StudentProfileForm: FormGroup;
 data;
 paramID;
  constructor(private fb: FormBuilder, private dataservice: GetdatanodesqlService,
    private activeRoute: ActivatedRoute,private router: Router) { }
  ngOnInit() {
    this. addDetailsForm();
    this.activeRoute.queryParams.subscribe(params => {
      if (params['rankId']) {
        this.paramID = params['rankId'];
        this.getStudentsPartucularData();
      }
  });

  }
  addDetailsForm() {
    this.StudentProfileForm = this.fb.group({
      Name: ['', Validators.required ],
      CLass: ['', Validators.required],
      Roll : ['', Validators.required],
      Rank : ['', Validators.required]
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // }),
  });

}

getStudentsPartucularData() {
  console.log(this.paramID);
    this.dataservice.getDataId(this.paramID).subscribe(res => {
      console.log(res);
      this.StudentProfileForm.patchValue(res[0]);
    // window.alert('You\'r Student Record is submitted');
    });

}
sendtudentDetails() {
console.log(this.StudentProfileForm.value);
if (this.StudentProfileForm.valid) {
  this.dataservice.addData(this.StudentProfileForm.value).subscribe(res => {
    console.log(res);
  window.alert('You\'r Student Record is submitted');
  });
}
}
}
