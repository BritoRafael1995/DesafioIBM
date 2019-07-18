import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'

import { AppComponent } from './app.component';
import { MiojoComponent } from './miojo/miojo.component';

@NgModule({
  declarations: [
    AppComponent,
    MiojoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxAlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
