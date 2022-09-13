import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremiumcalculatorComponent } from './components/premiumcalculator/premiumcalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiumcalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
