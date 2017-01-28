import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { QuoteIconComponent } from './quote-icon/quote-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    QuoteIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
