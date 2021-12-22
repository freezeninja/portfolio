import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcMainComponent } from './tc-main.component';

describe('TcMainComponent', () => {
  let component: TcMainComponent;
  let fixture: ComponentFixture<TcMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
