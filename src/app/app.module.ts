import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    RootModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
