import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form/test-form.component';
import { TestComponent } from './test-list/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { InputTrimModule } from 'ng2-trim-directive';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { OpenCloseComponent } from 'src/app/open-close/open-close.component';

@NgModule({
  providers: [
  ],
  declarations: [
    TestFormComponent,
    TestComponent,
    OpenCloseComponent
  ],
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
    TestFormComponent,
    TestComponent
  ],
  entryComponents: [
    TestComponent
  ]
})
export class TestModule { }
