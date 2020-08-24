import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDialogCodeAndMessageComponent } from './share-dialog-code-and-message.component';

describe('ShareDialogCodeAndMessageComponent', () => {
  let component: ShareDialogCodeAndMessageComponent;
  let fixture: ComponentFixture<ShareDialogCodeAndMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDialogCodeAndMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDialogCodeAndMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
