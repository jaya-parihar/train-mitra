import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingTrainSvgComponent } from './moving-train-svg.component';

describe('MovingTrainSvgComponent', () => {
  let component: MovingTrainSvgComponent;
  let fixture: ComponentFixture<MovingTrainSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingTrainSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingTrainSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
