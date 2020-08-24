import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTrimModule } from 'ng2-trim-directive';



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InputTrimModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
