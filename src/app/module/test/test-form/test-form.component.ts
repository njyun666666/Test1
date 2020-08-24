import { Component, OnInit, Inject, Input, EventEmitter, Output, Directive, ViewChild } from '@angular/core';
import { A1_SP_TestModel } from 'src/app/models/test-model';
import { ViewModel } from 'src/app/models/view-model';
import { TestService } from '../../../service/test.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TestComponent } from '../test-list/test.component';
import { ShareDialogComponent } from 'src/app/share/component/share-dialog/share-dialog.component';
import { ShareDialogCodeAndMessageComponent } from 'src/app/share/component/share-dialog-code-and-message/share-dialog-code-and-message.component';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  @Output() childEvent = new EventEmitter<string>();

  //model = new A1_SP_TestModel();
  isSubmit = false;
  
  testForm = this.formBuilder.group({
    id: ['', [Validators.required, Validators.minLength(4)]],
    name: ['', Validators.required],
    date:['']
  });

  //this.route.queryParams.subscribe((queryParams) => {
  //  console.log(queryParams['id']);
  //});



  constructor(private formBuilder: FormBuilder, private router:Router,private testService: TestService, public dialog: MatDialog) { }

  ngOnInit() {


    //this.testForm.setValue ({ "id": "SSSS", "name": "SSSSS" });

  }


  onSubmit() {

    if (this.isSubmit == true) return false;

    this.isSubmit = true;

    this.testService.A1_SP_Test_Insert(this.testForm.value).subscribe(result => {
      let code = result.code;
      let message = result.message;

      this.openDialog(code,message);


      //result;

    }, error => { console.log(error) });
    
  }


  openDialog(code: number, message:string): void {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      
      data: { title: 'Result', component: ShareDialogCodeAndMessageComponent, code: code, message: message }
      
    });

    dialogRef.afterClosed().subscribe(result => {

      if (code == 1) {
        this.router.navigateByUrl('/test');
      }
      else {
        this.isSubmit = false;
      }
      //this.animal = result;
    });
  }

  test() {
    this.childEvent.emit('this is a test');
  }

  getError() {
    let s = this.testForm.get('id').errors;
    let ss = this.testForm.get('id').hasError('minlength');
    console.log(s);
    console.log(ss);
  }


  //get testFormId() { return this.testForm.get('id'); }



}
