import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDownComponent } from './sidebar-down.component';

describe('SidebarDownComponent', () => {
  let component: SidebarDownComponent;
  let fixture: ComponentFixture<SidebarDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
