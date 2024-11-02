import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCellComponent } from './post-cell.component';

describe('PostCellComponent', () => {
  let component: PostCellComponent;
  let fixture: ComponentFixture<PostCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
