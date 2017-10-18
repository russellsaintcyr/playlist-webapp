import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {AboutComponent} from "../components/about/about.component";
import {PlaylistsComponent} from "../components/playlists/playlists.component";
import {LoginComponent} from "../components/login/login.component";
import {PlaylistComponent} from "../components/playlist/playlist.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
    path: 'login',
    component: LoginComponent
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
