import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CallbackComponent } from './components/callback/callback.component';
import {GlobalErrorHandler} from "./classes/GlobalErrorHandler";
import {AlertService} from "./services/alert.service";
import {AlertComponent} from "./directives/alert.component";
import { NowPlayingComponent } from './components/now-playing/now-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    PlaylistsComponent,
    LoginComponent,
    PlaylistComponent,
    SettingsComponent,
    CallbackComponent,
    AlertComponent,
    NowPlayingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
