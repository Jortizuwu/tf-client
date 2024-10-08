import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentComponent } from './opponent.component';

describe('OpponentComponent', () => {
  let component: OpponentComponent;
  let fixture: ComponentFixture<OpponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
