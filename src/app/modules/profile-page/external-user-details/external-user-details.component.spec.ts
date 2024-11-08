import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalUserDetailsComponent } from './external-user-details.component';

describe('ExternalUserDetailsComponent', () => {
  let component: ExternalUserDetailsComponent;
  let fixture: ComponentFixture<ExternalUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalUserDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
