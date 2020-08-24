import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './template/main/main.component';
import { EmptyComponent } from './template/empty/empty.component';
import { TestComponent } from './module/test/test-list/test.component';
import { TestFormComponent } from './module/test/test-form/test-form.component';
import { AuthService, UserToken } from './service/auth.service';
import { LoginFormComponent } from './module/login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
 //{ path: '', component: LoginFormComponent, pathMatch: 'full' },
 {
    path: '', component: EmptyComponent, children:
      [
        { path: '', component: LoginFormComponent, data: { animation: 'login' }  }
      ]

  },
  {
    path: '', component: MainComponent, children:
      [
        { path: 'test', component: TestComponent, data: { animation: 'test' } , canActivate: [AuthService] },
        { path: 'testForm', component: TestFormComponent, data: { animation: 'testForm' }  },
        { path: 'home', component: TestComponent, data: { animation: 'home' }  }
      ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [AuthService, UserToken]
})
export class AppRoutingModule { }
