import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSkillComponent } from './learn-skill.component';

describe('LearnSkillComponent', () => {
  let component: LearnSkillComponent;
  let fixture: ComponentFixture<LearnSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
