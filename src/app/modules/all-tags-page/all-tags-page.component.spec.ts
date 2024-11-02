import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTagsPageComponent } from './all-tags-page.component';

describe('AllTagsPageComponent', () => {
  let component: AllTagsPageComponent;
  let fixture: ComponentFixture<AllTagsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTagsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTagsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
