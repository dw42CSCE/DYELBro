import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyelbotComponent } from './dyelbot.component';

describe('DyelbotComponent', () => {
  let component: DyelbotComponent;
  let fixture: ComponentFixture<DyelbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyelbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DyelbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
