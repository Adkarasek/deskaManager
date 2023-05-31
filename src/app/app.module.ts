import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TmControlComponent } from './tm-control/tm-control.component';
import { TmStatusComponent } from './tm-control/tm-status/tm-status.component';
import { TmSoftwareListComponent } from './tm-control/tm-software-list/tm-software-list.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {NgModel} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TmControlComponent,
    TmStatusComponent,
    TmSoftwareListComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
