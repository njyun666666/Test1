import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './template/main/main.component';
import { EmptyComponent } from './template/empty/empty.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './module/shared-material/shared-material.module';
import { TestModule } from './module/test/test.module';
import { ShareDialogComponent } from './share/component/share-dialog/share-dialog.component';
import { ShareDialogCodeAndMessageComponent } from './share/component/share-dialog-code-and-message/share-dialog-code-and-message.component';
import { LoginModule } from './module/login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmptyComponent,
    ShareDialogComponent,
    ShareDialogCodeAndMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    TestModule,
    LoginModule
  ],
  providers: [CookieService],
  entryComponents: [
    ShareDialogComponent,
    ShareDialogCodeAndMessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
