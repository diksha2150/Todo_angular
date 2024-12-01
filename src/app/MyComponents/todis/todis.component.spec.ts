import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodisComponent } from './todis.component';

describe('TodisComponent', () => {
  let component: TodisComponent;
  let fixture: ComponentFixture<TodisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
