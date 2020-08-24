import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-dialog-code-and-message',
  templateUrl: './share-dialog-code-and-message.component.html',
  styleUrls: ['./share-dialog-code-and-message.component.scss']
})
export class ShareDialogCodeAndMessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
