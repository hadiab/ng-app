import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersModule } from "./teachers/teachers.module"
import { PupilsModule } from "./pupils/pupils.module"

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,

      TeachersModule,
      PupilsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
