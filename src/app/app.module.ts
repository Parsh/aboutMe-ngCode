import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routing } from './app.routes';
import { AboutComponent } from './about/about.component';
import { MLandAIComponent } from './mland-ai/mland-ai.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { NavbarComponent } from './home/navbar.component';
import { MainTileComponent } from './shared/main-tile.component'

import { DataService } from './shared/data.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MLandAIComponent,
    WebDevComponent,
    NavbarComponent,
    MainTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
