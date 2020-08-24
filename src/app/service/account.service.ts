import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ApiUrl } from '../enum/api-url.enum';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClientService: HttpClientService) {  }

  Login(para): any {
    let api = ApiUrl.main +'Account/Login';
    let params = para;
    let result = this.httpClientService.post(api, params);
    return result;
  }

  GetMenu(): any {
    let api = ApiUrl.main+'Account/MenuGet';
    let params = null;
    let result = this.httpClientService.post(api, params);
    return result;
  }


}
