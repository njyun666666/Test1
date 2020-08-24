import { Component, OnInit, ViewChild, EventEmitter, Output, Directive } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TestService } from '../../../service/test.service';

import { ViewModel } from '../../../models/view-model';
import { Data, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { A1_SP_Test } from '../models/test-model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  testListViewmodel: ViewModel = new ViewModel();
  testList;
  testListColumns: string[] = ['id', 'name', 'date'];
  testListUpdateTime: Date;
  constructor(private testService: TestService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.A1_SP_Test_Get();

    //console.log(this.route);
    //let a = this.route.snapshot.queryParamMap.get('a');

    //console.log('a='+a);
  }


  A1_SP_Test_Get(): void {
    //console.log('A1_SP_Test_Get()');
    this.testService.A1_SP_Test_Get().subscribe(result => {

      this.testListViewmodel = result;
      //this.testList = this.testListViewmodel.viewModelList;

      this.testList = new MatTableDataSource(this.testListViewmodel.viewModelList);
      this.testList.sort = this.sort;
      this.testListUpdateTime = new Date();
    }, error => { console.log(error) });



  }


  test(msg) {
    console.log(msg);
    this.A1_SP_Test_Get();
  } 





}
