import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDerective } from './basic-highlight/basic-highlight.derective';
import { BetterHighlightDirective } from './better-hightlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDerective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
