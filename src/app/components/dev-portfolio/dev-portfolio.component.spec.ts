import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPortfolioComponent } from './dev-portfolio.component';

describe('DevPortfolioComponent', () => {
  let component: DevPortfolioComponent;
  let fixture: ComponentFixture<DevPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevPortfolioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
