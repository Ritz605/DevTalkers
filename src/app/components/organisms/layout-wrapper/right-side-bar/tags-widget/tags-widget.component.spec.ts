import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsWidgetComponent } from './tags-widget.component';

describe('TagsWidgetComponent', () => {
  let component: TagsWidgetComponent;
  let fixture: ComponentFixture<TagsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
