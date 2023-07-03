import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmailFormComponent } from './change-password-email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(ChangePasswordEmailFormComponent.name, () => {
  let component: ChangePasswordEmailFormComponent;
  let fixture: ComponentFixture<ChangePasswordEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
