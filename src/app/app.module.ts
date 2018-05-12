import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { InstagramComponent } from './instagram/instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
