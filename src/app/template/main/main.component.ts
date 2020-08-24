import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AccountService } from 'src/app/service/account.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInAnimation]
})
export class MainComponent implements OnInit {
  mobileQuery: MediaQueryList;
  //fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  menu;
  menuLv1;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private accountService: AccountService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getMenu();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  prepareRoute(outlet: RouterOutlet) {
    //console.log(outlet.activatedRoute.url[]);
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  getMenu() {

    this.accountService.GetMenu().subscribe(result => {
      let code = result.code;
      let message = result.message;
      let viewModelList = result.viewModelList;
      this.menu = viewModelList;

      this.menuLv1 = viewModelList.filter(function (e, ei) {
        if (!e.mainFuncID) return true
      })

      //[opened]="mobileQuery.matches ? false : true" 

      //viewModelList.filter(m => m.mainFuncID !="")

      //console.log(viewModelList);
      //this.openDialog(code, message);
      //let authData = btoa(JSON.stringify(viewModelList));
      //JSON.parse(o)
      //btoa(a)


      //result;
      //localStorage.AUTH = authData;
      //this.cookieAUTH = this.cookieService.get('AUTH');


    }, error => {
      console.log(error);
    });

  }

  getMenuLv2(funcid: string) {

    let list= this.menu.filter(function (e, ei) {
      if (funcid == e.mainFuncID) return true
    })

    return list;
  }





}
