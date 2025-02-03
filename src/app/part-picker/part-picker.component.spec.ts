import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartPickerComponent } from './part-picker.component';

describe('PartPickerComponent', () => {
  let component: PartPickerComponent;
  let fixture: ComponentFixture<PartPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
