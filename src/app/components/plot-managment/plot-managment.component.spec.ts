import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotManagmentComponent } from './plot-managment.component';

describe('PlotManagmentComponent', () => {
  let component: PlotManagmentComponent;
  let fixture: ComponentFixture<PlotManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
