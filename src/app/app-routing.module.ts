import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewDataNodesqlComponent } from './view-data-nodesql/view-data-nodesql.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { LoginComponent } from './login/login.component';
import { RegstrationComponent } from './regstration/regstration.component';
import { AuthGuard } from './authguard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'totalStudents', component: ViewDataNodesqlComponent,canActivate: [AuthGuard] },
  { path: 'addStudents', component: AddStudentComponent ,canActivate: [AuthGuard]},
  { path: 'feestructure', component: FeeStructureComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegstrationComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
