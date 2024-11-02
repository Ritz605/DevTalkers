import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCellComponent } from './vote-cell.component';

describe('VoteCellComponent', () => {
  let component: VoteCellComponent;
  let fixture: ComponentFixture<VoteCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
