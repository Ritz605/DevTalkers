import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarWidgetComponent } from './side-bar-widget.component';

describe('SideBarWidgetComponent', () => {
  let component: SideBarWidgetComponent;
  let fixture: ComponentFixture<SideBarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
