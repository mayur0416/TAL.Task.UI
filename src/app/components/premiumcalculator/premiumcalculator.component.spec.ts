import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PremiumcalculatorComponent } from './premiumcalculator.component';
import { HttpClientModule} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';

describe('PremiumcalculatorComponent', () => {
  let component: PremiumcalculatorComponent;
  let fixture: ComponentFixture<PremiumcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,MockModule(MatSelectModule)],
      declarations: [ PremiumcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
