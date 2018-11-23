import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarAreaComponent } from './sidebar-area/sidebar-area.component';
import { WorldServiceComponent } from './world-service/world-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    FooterComponent,
    SidebarAreaComponent,
    WorldServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
