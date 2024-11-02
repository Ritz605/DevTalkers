import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskWidgetComponent } from './ask-widget.component';

describe('AskWidgetComponent', () => {
  let component: AskWidgetComponent;
  let fixture: ComponentFixture<AskWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
