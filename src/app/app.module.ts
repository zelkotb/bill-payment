import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillerListComponent } from './component/biller-list/biller-list.component';
import { BillerPageComponent } from './page/biller-page/biller-page.component';
import { BillerCardComponent } from './component/biller-card/biller-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ContextPageComponent } from './page/context-page/context-page.component';
import { ContextInfoPageComponent } from './page/context-info-page/context-info-page.component';
import { BillerListContextComponent } from './component/context/biller-list-context/biller-list-context.component';
import { DebtListContextComponent } from './component/context/debt-list-context/debt-list-context.component';
import { DebtPageComponent } from './page/debt-page/debt-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BillerListComponent,
    BillerPageComponent,
    BillerCardComponent,
    SpinnerComponent,
    ContextPageComponent,
    ContextInfoPageComponent,
    BillerListContextComponent,
    DebtListContextComponent,
    DebtPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
