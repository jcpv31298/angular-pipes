import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuration locale
import localeEsMx from "@angular/common/locales/es-MX";
import localeFrCa from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsMx);
registerLocaleData(localeFrCa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
