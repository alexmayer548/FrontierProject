import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontierComponent } from './frontier/frontier.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import {MatTabsModule} from '@angular/material/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FrontierComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatTabsModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
