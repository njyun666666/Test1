import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { CookieService } from 'ngx-cookie-service';
import { ShareDialogComponent } from 'src/app/share/component/share-dialog/share-dialog.component';
import { ShareDialogCodeAndMessageComponent } from 'src/app/share/component/share-dialog-code-and-message/share-dialog-code-and-message.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isSubmit = false;
  cookieValue = '';
  cookieAUTH = '';


  form = this.formBuilder.group({
    Account: ['admin', [Validators.required]],
    Password: ['admin', Validators.required]
  });

  constructor(private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit() {

    this.cookieService.delete('AUTH');
    this.cookieService.set('Test', new Date().toISOString());
    this.cookieValue = this.cookieService.get('Test');

    //console.log(this.route);



  }


  onSubmit() {
 
    if (this.isSubmit == true) return false;

    this.isSubmit = true;

    this.accountService.Login(this.form.value).subscribe(result => {
      let code = result.code;
      let message = result.message;
      let viewModelList = result.viewModelList;

      //console.log(viewModelList);
      //this.openDialog(code, message);
      let authData = btoa(JSON.stringify(viewModelList));
      //JSON.parse(o)
      //btoa(a)

      //result;
      localStorage.AUTH = authData;
      //this.cookieAUTH = this.cookieService.get('AUTH');

      if (code == 1) {

        //this.route.snapshot.queryParamMap.get('a');

        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        let params = this.route.snapshot.queryParamMap.get('params');
        let paramsJson = params ? JSON.parse(atob(params)) : null;

        this.cookieService.set('AUTH',message);

        if (returnUrl) {
          this.router.navigate([returnUrl], { queryParams: paramsJson });
        }
        else
          this.router.navigate(['/home']);

      } else {

        //alert(message);
        this.openDialog(code, message);
        this.isSubmit = false;
      }

    }, error => {
      console.log(error);
      alert(error);
      this.isSubmit = false;
    });

  }




  openDialog(code: number, message: string): void {
    const dialogRef = this.dialog.open(ShareDialogComponent, {

      data: { title: 'Result', component: ShareDialogCodeAndMessageComponent, code: code, message: message }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (code == 1) {
        this.router.navigateByUrl('/home');
      }
      else {
        this.isSubmit = false;
      }
      //this.animal = result;
    });
  }




}
