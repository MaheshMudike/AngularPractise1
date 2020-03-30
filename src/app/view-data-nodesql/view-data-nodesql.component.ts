import { Component, OnInit } from '@angular/core';
import { GetdatanodesqlService } from '../getdatanodesql.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-data-nodesql',
  templateUrl: './view-data-nodesql.component.html',
  styleUrls: ['./view-data-nodesql.component.css']
})
export class ViewDataNodesqlComponent implements OnInit {
  StudentsProfile ;
  constructor(private dataservice: GetdatanodesqlService,
    private router: Router, private actvateRoute: ActivatedRoute) { }
  ngOnInit() {
this.recivedData();
  }
  recivedData() {
    console.log('cameee');
    this.dataservice.getData().subscribe(res => {
      console.log(res);
      this.StudentsProfile = res;
     // this.StudentsProfile.push(res)
    });
  }
  deletedata(data) {
    const object = {
      Name : data.Name,
      CLass : data.CLass,
      Roll : data.Roll,
      Rank : data.Rank
    };
    console.log(object.Name);
    this.dataservice.deleteData(object.Name).subscribe(res => {
      console.log('cameeeee ' + res);
      this. recivedData();
      window.alert('deltedtred successfully');
     // this.StudentsProfile = res;
     // this.StudentsProfile.push(res)
    });
  }
  navigatetoAdd(id) {
    this.router.navigate(['/addStudents'], { queryParams: { rankId: id } });

  }

}
