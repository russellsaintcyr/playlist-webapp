import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {AboutComponent} from "../components/about/about.component";
import {PlaylistsComponent} from "../components/playlists/playlists.component";
import {LoginComponent} from "../components/login/login.component";
import {PlaylistComponent} from "../components/playlist/playlist.component";
import {SongViewComponent} from "../components/song-view/song-view.component";
import {SettingsComponent} from "../components/settings/settings.component";
import {CallbackComponent} from "../components/callback/callback.component";

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'songview',
    component: SongViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
