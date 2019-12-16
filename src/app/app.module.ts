import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataNodesqlComponent } from './view-data-nodesql/view-data-nodesql.component';
import { GetdatanodesqlService } from './getdatanodesql.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
//import { MatCardModule } from '@angular/material';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { AddStudentComponent } from './add-student/add-student.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegstrationComponent } from './regstration/regstration.component';
import { AuthInterceptor } from './auth.inteceptors';
import { AuthGuard } from './authguard';
import { AuthService } from './authservice';
import { TopHeaderComponent } from './top-header/top-header.component';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ViewDataNodesqlComponent,
    HomeComponent,
    AddStudentComponent,
    FeeStructureComponent,
    LoginComponent,
    RegstrationComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule,
    
   //MatCardModule,
   // MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,AuthService,
  GetdatanodesqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
