import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { DataCardComponent } from './data-card/data-card.component';

import { AlbumService } from './album.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    DataCardComponent,
    // HttpClientModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
