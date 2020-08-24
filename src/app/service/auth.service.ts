import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { HttpClientService } from './http-client.service';
import { ApiUrl } from '../enum/api-url.enum';
import { Location } from '@angular/common';





@Injectable()
export class UserToken { }
//export class Permissions {
//  canActivate(user: UserToken, id: string): boolean {
//    return true;
//  }
//}


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild  {

  constructor(private httpClientService: HttpClientService, private router: Router, private currentUser: UserToken, private location: Location) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //console.log(this.currentUser);
    let r = this.baseCanActivate(route, state);
    //console.log('canActivate=');
    //console.log(r);
    return r;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.baseCanActivate(childRoute, state);
  }

  baseCanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    //console.log(route);
    //console.log(route.data);
    //console.log(route.routeConfig.path);
    //console.log(route.queryParams);
    //console.log(state);
    //console.log(state.url);

    let url = state.url.split('?')[0];
    let queryParams = route.queryParams;
    
    
    return this.authcheck(url, queryParams);
  }


  async authcheck(url, queryParams) {

    let result = false;
    let api = ApiUrl.main + 'Account/AuthCheck';
    let params = {
      'url': url
    };
    
    let res = await this.httpClientService.post(api, params).toPromise();
    result = res.code == 1 ? true : false;

    //console.log('authcheck url=' + url + ' code=' + res.code);


    if (res.code == -1) {
      //no login
      let urlParams = {
        returnUrl: url,
        params: btoa(JSON.stringify(queryParams))
      } 
      this.router.navigate(['/'], { queryParams: urlParams });

    } else if (res.code < -1) {
      //no auth
      alert('no auth');
      this.goBack();
    }

    return result;
    


  }

  goBack() {
    this.router.navigate(['/home']);

    //if (window.history.length > 1) {
    //  this.location.back()
    //} else {
    //  this.router.navigate(['/home']);
    //}
  }

  //basecanActivate(user: UserToken, id: string): boolean {
  //  console.log('auth.service basecanActivate()');
  //  //this.router.navigate(['/home']);
  //  //this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
  //  return true;
  //}


  //account: Account;
  //constructor() { }


  //login(role: string): Observable<Account> {
  //  let account: Account;
  //  account.id = '11';
  //  account.name = 'super man';
  //  this.account = account;
  //  return Observable.of(account);
  //}
  //getAccount(): Account {
  //  return this.account;
  //}
  //isLogdedin(): boolean {
  //  return this.account && this.account.id != null;
  //}
  //hasRole(role: string): boolean {
  //  return this.account && this.account.roles.includes(role);
  //}





  


}
