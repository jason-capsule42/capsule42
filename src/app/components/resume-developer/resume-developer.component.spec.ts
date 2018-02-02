import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDeveloperComponent } from './resume-developer.component';

describe('ResumeDeveloperComponent', () => {
  let component: ResumeDeveloperComponent;
  let fixture: ComponentFixture<ResumeDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
