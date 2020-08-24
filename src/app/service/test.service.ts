import { Injectable } from '@angular/core';

import { HttpClientService } from '../service/http-client.service';
import { ViewModel } from '../models/view-model';
import { A1_SP_TestModel } from '../models/test-model';
import { ApiUrl } from '../enum/api-url.enum';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClientService: HttpClientService) { }

  /** */
  A1_SP_Test_Get(): any {
    let api = ApiUrl.main +'Test/A1_SP_Test_Get';
    let params = { 'key': 'value', 'key2': 'value2', 'key3': 'value3' };
    let result = this.httpClientService.post(api, params);
    return result;
  }


  A1_SP_Test_Insert(para): any {
    let api = ApiUrl.main +'Test/A1_SP_Test_Insert';
    let params = para;
    let result = this.httpClientService.post(api, params);
    return result;
  }

  

}
