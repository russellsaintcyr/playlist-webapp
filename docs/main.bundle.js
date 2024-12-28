webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_playlists_playlists_component__ = __webpack_require__("../../../../../src/app/components/playlists/playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_callback_callback_component__ = __webpack_require__("../../../../../src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_now_playing_now_playing_component__ = __webpack_require__("../../../../../src/app/components/now-playing/now-playing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_album_album_component__ = __webpack_require__("../../../../../src/app/components/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_artist_artist_component__ = __webpack_require__("../../../../../src/app/components/artist/artist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_playlists_playlists_component__["a" /* PlaylistsComponent */]
    },
    {
        path: 'artist',
        component: __WEBPACK_IMPORTED_MODULE_11__components_artist_artist_component__["a" /* ArtistComponent */]
    },
    {
        path: 'album',
        component: __WEBPACK_IMPORTED_MODULE_10__components_album_album_component__["a" /* AlbumComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'playlists',
        component: __WEBPACK_IMPORTED_MODULE_3__components_playlists_playlists_component__["a" /* PlaylistsComponent */]
    },
    {
        path: 'playlist',
        component: __WEBPACK_IMPORTED_MODULE_5__components_playlist_playlist_component__["a" /* PlaylistComponent */]
    },
    {
        path: 'nowplaying',
        component: __WEBPACK_IMPORTED_MODULE_8__components_now_playing_now_playing_component__["a" /* NowPlayingComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_6__components_settings_settings_component__["a" /* SettingsComponent */]
    },
    {
        path: 'stats',
        component: __WEBPACK_IMPORTED_MODULE_9__components_stats_stats_component__["a" /* StatsComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_7__components_callback_callback_component__["a" /* CallbackComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container\">\n  <alert></alert>\n  <div class=\"starter-template\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello Russell';
    }
    AppComponent.prototype.setRating = function (rating) {
        console.log('Rating: ' + rating);
        // set ID and rating
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_playlists_playlists_component__ = __webpack_require__("../../../../../src/app/components/playlists/playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__ = __webpack_require__("../../../../../src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classes_GlobalErrorHandler__ = __webpack_require__("../../../../../src/app/classes/GlobalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_alert_component__ = __webpack_require__("../../../../../src/app/directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_now_playing_now_playing_component__ = __webpack_require__("../../../../../src/app/components/now-playing/now-playing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_album_album_component__ = __webpack_require__("../../../../../src/app/components/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_artist_artist_component__ = __webpack_require__("../../../../../src/app/components/artist/artist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_playlists_playlists_component__["a" /* PlaylistsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__["a" /* PlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_17__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_now_playing_now_playing_component__["a" /* NowPlayingComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_stats_stats_component__["a" /* StatsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_artist_artist_component__["a" /* ArtistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */],
                useClass: __WEBPACK_IMPORTED_MODULE_15__classes_GlobalErrorHandler__["a" /* GlobalErrorHandler */]
            },
            __WEBPACK_IMPORTED_MODULE_16__services_alert_service__["a" /* AlertService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/GlobalErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalErrorHandler = (function () {
    function GlobalErrorHandler() {
    }
    // private alertService: AlertService;
    // constructor(private _spotifyService:SpotifyService){}
    // https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
    GlobalErrorHandler.prototype.handleError = function (error) {
        if (error.message === 'Unauthorized') {
            // this.alertService.warn('Need to re-authorize');
            console.log('Need to re-authorize');
            // window.open(this._spotifyService.getAuthorizeURL(), '_self');
        }
        else {
            console.log(error.message);
        }
        // throw new Error(error.message);
    };
    return GlobalErrorHandler;
}());
GlobalErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalErrorHandler);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/GlobalErrorHandler.js.map

/***/ }),

/***/ "../../../../../src/app/classes/artist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
var Artist = (function () {
    function Artist(name, id) {
        this.name = name;
        this.id = id;
    }
    return Artist;
}());

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/artist.js.map

/***/ }),

/***/ "../../../../../src/app/classes/rating.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
var Rating = (function () {
    function Rating(trackURI, rating) {
        this.trackURI = trackURI;
        this.rating = rating;
    }
    return Rating;
}());

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/rating.js.map

/***/ }),

/***/ "../../../../../src/app/classes/track.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
var Track = (function () {
    function Track(uri, name, cover, albumName, mainArtist, id, progress_ms, duration_ms, is_playing, albumYear, albumID, mainArtistID, artists) {
        this.uri = uri;
        this.name = name;
        this.coverImage = cover;
        this.albumName = albumName;
        this.mainArtist = mainArtist;
        this.id = id;
        this.progress_ms = progress_ms;
        this.duration_ms = duration_ms;
        this.is_playing = is_playing;
        this.albumYear = albumYear;
        this.albumID = albumID;
        this.mainArtistID = mainArtistID;
        this.artists = artists;
    }
    return Track;
}());

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/track.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"{{album.images[1].url}}\" class=\"img-responsive albumCoverImg\" alt=\"Cover\">\n    </div>\n    <div class=\"col-md-6\">\n      <h2>{{album.name}}</h2>\n      <br><i class=\"glyphicon glyphicon-user\"></i>&nbsp;<a (click)=\"viewArtist(album.artists[0].id)\" [routerLink]=\"\">{{album.artists[0].name}}</a>\n      <br><i class=\"glyphicon glyphicon-cd\"></i>&nbsp;{{album.release_date | date: 'MMMM dd, yyyy'}}\n      <ol>\n        <li *ngFor=\"let track of album.tracks.items; let i = index\">\n          {{track.name}} ({{track.duration_ms | date: 'm:ss'}})\n        </li>\n      </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumComponent = (function () {
    function AlbumComponent(spotifyService, alertService, router) {
        this.spotifyService = spotifyService;
        this.alertService = alertService;
        this.router = router;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('albumID') === null) {
            this.alertService.error('No albumID found in local storage.');
        }
        else {
            var albumID = localStorage.getItem('albumID');
            this.spotifyService.getAlbum(albumID).subscribe(function (response) {
                _this.album = response;
                // console.log(this.album);
            }, function (err) {
                console.error(err);
                _this.alertService.error(err._body);
            });
        }
    };
    AlbumComponent.prototype.viewArtist = function (artistID) {
        localStorage.setItem('artistID', artistID);
        this.router.navigateByUrl('/artist');
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'album',
        template: __webpack_require__("../../../../../src/app/components/album/album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/album.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlbumComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/album.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>{{artist.name}}</h2>\n      <img src=\"{{artist.images[1].url}}\" class=\"img-responsive albumCoverImg\" alt=\"Cover\">\n      <div *ngIf=\"artist.genres.length != 0\">\n        <h3>Genres:</h3>\n        <ul>\n          <li *ngFor=\"let genre of artist.genres; let i = index\">\n            {{genre}}\n          </li>\n        </ul>\n      </div>\n      <div *ngIf=\"albums.length != 0\">\n        <h3>Albums:</h3>\n        <ul>\n          <li *ngFor=\"let album of albums; let i = index\">\n            <a (click)=\"viewAlbum(album.id)\" [routerLink]=\"\">{{album.name}}</a> ({{album.release_date | date: 'yyyy'}})\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistComponent = (function () {
    function ArtistComponent(spotifyService, alertService, router) {
        this.spotifyService = spotifyService;
        this.alertService = alertService;
        this.router = router;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('artistID') === null) {
            this.alertService.error('No artistID found in local storage.');
        }
        else {
            this.artistID = localStorage.getItem('artistID');
            this.getArtistDetails();
            this.getArtistAlbumDetails();
        }
    };
    ArtistComponent.prototype.getArtistDetails = function () {
        var _this = this;
        this.spotifyService.getArtist(this.artistID).subscribe(function (response) {
            _this.artist = response;
            console.log(_this.artist);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    ArtistComponent.prototype.getArtistAlbumDetails = function () {
        var _this = this;
        this.spotifyService.getArtistAlbums(this.artistID).subscribe(function (response) {
            _this.albums = response.items;
            // console.log(this.albums);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    ArtistComponent.prototype.viewAlbum = function (albumID) {
        localStorage.setItem('albumID', albumID);
        this.router.navigateByUrl('/album');
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'artist',
        template: __webpack_require__("../../../../../src/app/components/artist/artist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/artist.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ArtistComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/artist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "New access token: {{accessToken}}\n<br><br>\ntokenType: {{tokenType}}\n<br>\nexpiresIn: {{expiresIn}}\n"

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = (function () {
    function CallbackComponent(location, router) {
        this.location = location;
        this.router = router;
        var queryString = this.location.path(true).substring(10);
        this.queryStringArray = queryString.split('&');
    }
    CallbackComponent.prototype.getQueryVariable = function (variable) {
        for (var i = 0; i < this.queryStringArray.length; i++) {
            var pair = this.queryStringArray[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    };
    CallbackComponent.prototype.ngOnInit = function () {
        // feedback
        this.accessToken = this.getQueryVariable('access_token');
        this.tokenType = this.getQueryVariable('token_type');
        this.expiresIn = this.getQueryVariable('expires_in');
        // set token
        localStorage.setItem('bearerToken', this.accessToken);
        console.log('Updated local storage token');
        // redirect
        var savedState = localStorage.getItem('savedState');
        if (savedState !== null && savedState !== undefined) {
            console.log('Navigating to saved state of ' + savedState);
            this.router.navigateByUrl('/' + savedState);
        }
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'callback',
        template: __webpack_require__("../../../../../src/app/components/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/callback/callback.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* PathLocationStrategy */] }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CallbackComponent);

var _a, _b;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"keyPressed()\">\n  <div class=\"form-group\">\n    <input type=\"text\" [(ngModel)]=\"searchStr\" title=\"Yo\" id=\"xx\" name=\"zorg\" placeholder=\"Enter search string\" class=\"form-control\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\">Search Artist</button>\n</form>\n\n<!--loop through artists-->\n<div *ngIf=\"artists !== null && artists !== undefined\">\n  <table>\n    <tr *ngFor=\"let artist of artists; let i = index\">\n      <td>\n        {{i+1}}\n        <img src=\"{{artist.images[2].url}}\" style=\"margin: 5px; width: 80px\" (click)=\"showArtist(artist)\" alt=\"Artist image\">\n      </td>\n      <td>\n        {{artist.name}} - {{artist.id}}\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
        this.searchStr = 'foo';
    }
    DashboardComponent.prototype.keyPressed = function () {
        var _this = this;
        console.log(this.searchStr);
        this._spotifyService.searchMusic(this.searchStr, 'artist').subscribe(function (res) {
            console.log(res.artists.items);
            _this.artists = res.artists.items;
        }, function (err) {
            console.log('Error: ' + err.statusText);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.showArtist = function (artist) {
        console.log(artist);
        this._spotifyService.getArtist(artist.id).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error: ' + err.statusText);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-default\" (click)=\"authorizeUser()\">Authorize in Spotify</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_spotifyService, alertService) {
        this._spotifyService = _spotifyService;
        this.alertService = alertService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authorizeUser = function () {
        window.open(this._spotifyService.getAuthorizeURL(), '_self');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-top\">\n<!--  <a class=\"navbar-brand\" href=\"#\">Playlist</a>-->\n<!--  <i class=\"glyphicon glyphicon-music\"></i>-->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"playlists\">\n          <i class=\"glyphicon glyphicon-music\"></i>\n          My Playlists\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"nowplaying\">\n          <i class=\"glyphicon glyphicon-music\"></i>\n          Now Playing\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"selectedPlaylist\">\n        <a class=\"nav-link\" routerLink=\"playlist\">\n          <i class=\"glyphicon glyphicon-music\"></i>\n          {{selectedPlaylist.name}}\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"settings\">\n          <i class=\"glyphicon glyphicon-cog\"></i>\n          Configuration\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"search\">\n          <i class=\"glyphicon glyphicon-search\"></i>\n          Search\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- playback -->\n  <div *ngIf=\"isPlaying\">\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"stop()\"><i class=\"glyphicon glyphicon-stop\"></i></button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"playNextPrevious('previous')\"><i class=\"glyphicon glyphicon-backward\"></i></button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"playNextPrevious('next')\"><i class=\"glyphicon glyphicon-forward\"></i></button>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(spotifyService, alertService) {
        this.spotifyService = spotifyService;
        this.alertService = alertService;
        // console.log('getting currently playing.');
        // if (this.spotifyService.getCurrentlyPlaying() !== undefined) {
        //   console.log('got currently playing.');
        //   this.spotifyService.getCurrentlyPlaying().subscribe(res => {
        //       console.log(res);
        //       this.isPlaying = res.is_playing;
        //     },
        //     err => {
        //       console.log('Error: ' + err.statusText);
        //     }
        //   )
        // } else {
        //   console.log('got currently playing returned undefined');
        // }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.selectedPlaylist = JSON.parse(localStorage.getItem('selectedPlaylist'));
    };
    NavbarComponent.prototype.playNextPrevious = function (direction) {
        var _this = this;
        this.spotifyService.playNextPrevious(direction).subscribe(function (res) {
            // this.alertService.success('Playing  ' + direction + ' track');
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    NavbarComponent.prototype.stop = function () {
        var _this = this;
        this.spotifyService.controlPlayback(null, 'pause').subscribe(function (res) {
            _this.alertService.success('Stopping playback');
            _this.isPlaying = false;
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/now-playing/now-playing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trackName {\n  text-shadow: -1px 0 black, 0 3px black, 3px 0 black, 0 -1px black;\n  color: chartreuse;\n  font-size: 30px;\n}\n.trackDetails {\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  color: chartreuse;\n}\n.albumCoverImg {\n  box-shadow: 5px 5px grey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/now-playing/now-playing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"track !== undefined\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <img src=\"{{track.coverImage}}\" class=\"img-responsive albumCoverImg\">\n    </div>\n    <div class=\"col-md-4\">\n      <i class=\"glyphicon glyphicon-thumbs-down nowPlaying\"\n         id=\"{{'THUMBS3-' + track.id}}\"\n         [class.star-selected]=\"track.rating === 3\"\n         (click)=\"setRating(3, track)\"></i>\n      <i class=\"glyphicon glyphicon-hand-right nowPlaying\"\n         id=\"{{'THUMBS4-' + track.id}}\"\n         [class.star-selected]=\"track.rating === 4\"\n         (click)=\"setRating(4, track)\"></i>\n      <i class=\"glyphicon glyphicon-thumbs-up nowPlaying\"\n         id=\"{{'THUMBS5-' + track.id}}\"\n         [class.star-selected]=\"track.rating === 5\"\n         (click)=\"setRating(5, track)\"></i>\n      <br>\n      <span *ngIf=\"loadingTrack\">\n        <i class=\"glyphicon glyphicon-refresh\"></i>&nbsp;\n        Loading track\n      </span>\n      <div class=\"trackDetails\">\n        <!-- TODO loop through artists, and link -->\n        <span class=\"trackName\">{{ track.name }}</span>\n        <br><i class=\"glyphicon glyphicon-user\"></i>&nbsp;\n        <span *ngFor=\"let artist of track.artists; let i = index\">\n          <a (click)=\"viewArtist(artist.id)\" [routerLink]=\"\">{{ artist.name }}</a><span *ngIf=\"i < track.artists.length - 1\">, </span>\n        </span>\n        <br>\n        <i class=\"glyphicon glyphicon-cd\"></i>&nbsp;\n        <a (click)=\"viewAlbum()\" [routerLink]=\"\">{{ track.albumName }} ({{ track.albumYear | date: 'yyyy' }})</a>\n        <br>\n        <i class=\"glyphicon glyphicon-time\"></i> &nbsp;{{ track.duration_ms | date: 'm:ss' }}\n        &nbsp;<progress *ngIf=\"track.is_playing\" id=\"file\" max=\"{{track.duration_ms}}\" value=\"{{adjusted_progress_ms}}\"></progress>\n        &nbsp;{{ adjusted_progress_ms | date: 'm:ss' }}\n        <br>\n        <i class=\"glyphicon glyphicon glyphicon-list\"></i>\n        <a routerLink=\"/playlist\">{{ this.selectedPlaylist.name }}</a>\n      </div>\n      <!-- playback -->\n      <div>\n        <br>\n        <button *ngIf=\"track.is_playing\" type=\"button\" class=\"btn btn-success\" (click)=\"stop()\"><i class=\"glyphicon glyphicon-stop\"></i></button>\n        <button *ngIf=\"!track.is_playing\" type=\"button\" class=\"btn btn-success\" (click)=\"play()\"><i class=\"glyphicon glyphicon-play\"></i></button>\n        <button *ngIf=\"track.is_playing\" type=\"button\" class=\"btn btn-success\" (click)=\"playNextPrevious('previous')\"><i\n          class=\"glyphicon glyphicon-backward\"></i></button>\n        <button *ngIf=\"track.is_playing\" type=\"button\" class=\"btn btn-success\" (click)=\"playNextPrevious('next')\"><i class=\"glyphicon glyphicon-forward\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/now-playing/now-playing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowPlayingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_track__ = __webpack_require__("../../../../../src/app/classes/track.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes_rating__ = __webpack_require__("../../../../../src/app/classes/rating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_artist__ = __webpack_require__("../../../../../src/app/classes/artist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NowPlayingComponent = NowPlayingComponent_1 = (function () {
    function NowPlayingComponent(spotifyService, alertService, router) {
        this.spotifyService = spotifyService;
        this.alertService = alertService;
        this.router = router;
        this.refreshPeriod = 60000;
        this.used_ms = 0;
        console.log('NowPlayingComponent constructor called');
    }
    NowPlayingComponent.showStars = function (rating, trackID, intervalId2) {
        var _this = this;
        if (intervalId2 !== null) {
            clearInterval(intervalId2);
        }
        var cssSelected = 'glyphicon glyphicon-star star-selected nowPlaying';
        var cssUnSelected = 'glyphicon glyphicon-star star-unselected nowPlaying';
        if (document.getElementById('star1-' + trackID) !== null) {
            document.getElementById('star1-' + trackID).className = (rating >= 1) ? cssSelected : cssUnSelected;
            document.getElementById('star2-' + trackID).className = (rating >= 2) ? cssSelected : cssUnSelected;
            document.getElementById('star3-' + trackID).className = (rating >= 3) ? cssSelected : cssUnSelected;
            document.getElementById('star4-' + trackID).className = (rating >= 4) ? cssSelected : cssUnSelected;
            document.getElementById('star5-' + trackID).className = (rating === 5) ? cssSelected : cssUnSelected;
        }
        else {
            // console.log('Failed to get element with ID star1-' + trackID + '. Retrying in 1 second.');
            var intervalId2_1 = setInterval(function () { return _this.showStars(rating, trackID, intervalId2_1); }, 1000);
        }
    };
    NowPlayingComponent.prototype.ngOnInit = function () {
        this.autoSkip = false;
        this.getCurrentlyPlaying(null);
        if (localStorage.getItem('ratings') === null) {
            console.log('ngOnInit - No local ratings yet set.');
            this.ratings = [];
            localStorage.setItem('ratings', JSON.stringify(this.ratings));
        }
        else {
            this.ratings = JSON.parse(localStorage.getItem('ratings'));
            console.log('ngOnInit - Loaded ' + this.ratings.length + ' ratings from local data.');
        }
        this.selectedPlaylist = JSON.parse(localStorage.getItem('selectedPlaylist'));
        // reload in X seconds
        console.log('ngOnInit - Reloading now playing page in ' + (this.refreshPeriod / 1000) + ' seconds.');
        this.timerRefresh = setTimeout(function () {
            location.reload();
        }, this.refreshPeriod);
    };
    NowPlayingComponent.prototype.ngOnDestroy = function () {
        console.log('Clearing timers');
        clearTimeout(this.timerRefresh);
        clearTimeout(this.timerProgressBar);
    };
    NowPlayingComponent.prototype.computeTime = function (obj) {
        // console.log(this.adjusted_progress_ms);
        obj.used_ms += 1000;
        this.adjusted_progress_ms = (this.initial_progress_ms + this.used_ms);
        this.timerProgressBar = setTimeout(function () {
            obj.computeTime(obj);
        }, 1000);
    };
    NowPlayingComponent.prototype.getCurrentlyPlaying = function (intervalId) {
        var _this = this;
        this.spotifyService.getCurrentlyPlaying().subscribe(function (response) {
            // console.log(response);
            if (response === null) {
                _this.alertService.warn('No track is currently playing.');
            }
            else {
                // store last track if there is one
                if (_this.track !== undefined) {
                    _this.lastTrack = _this.track;
                }
                // first image in array is largest
                var artists_1 = [];
                response.item.artists.forEach(function (element) { return artists_1.push(new __WEBPACK_IMPORTED_MODULE_6__classes_artist__["a" /* Artist */](element.name, element.id)); });
                _this.track = new __WEBPACK_IMPORTED_MODULE_3__classes_track__["a" /* Track */](response.item.uri, response.item.name, response.item.album.images[0].url, response.item.album.name, response.item.artists[0].name, response.item.id, response.progress_ms, response.item.duration_ms, response.is_playing, response.item.album.release_date, response.item.album.id, response.item.artists[0].id, artists_1);
                // console.log(this.track);
                // set playback times, and call loop
                _this.used_ms = 0;
                _this.initial_progress_ms = _this.track.progress_ms;
                if (_this.track.is_playing) {
                    _this.computeTime(_this);
                }
                // images
                document.body.style.backgroundImage = 'url(\'' + response.item.album.images[0].url + '\')';
                if (intervalId !== null) {
                    clearInterval(intervalId);
                }
                // search for existing rating
                console.log('Searching for rating for ' + response.item.uri);
                var obj = _this.ratings.find(function (obj) {
                    return obj.trackURI === response.item.uri;
                });
                if (obj === undefined) {
                    console.log("No rating found for " + response.item.uri);
                    // NowPlayingComponent.showStars(0, response.item.id, null);
                }
                else {
                    _this.track.rating = obj.rating;
                    // NowPlayingComponent.showStars(obj.rating, response.item.id, null);
                    // TODO add this as a preference/setting
                    if (_this.autoSkip) {
                        console.log('Skipping song since is already rated.');
                        _this.playNextPrevious('next');
                    }
                }
            }
            _this.loadingTrack = false;
        }, function (err) {
            _this.alertService.warn('Error loading now playing. ' + err.statusText);
            // throw new Error(err.statusText);
            window.open(_this.spotifyService.getAuthorizeURL(), '_self');
            _this.loadingTrack = false;
        });
    };
    NowPlayingComponent.prototype.setRating = function (rating, track) {
        console.log("Setting rating to " + rating + " for " + track.name);
        var elem = document.getElementById('star' + rating);
        // console.log();
        NowPlayingComponent_1.showStars(rating, track.id, null);
        var newRating = new __WEBPACK_IMPORTED_MODULE_4_app_classes_rating__["a" /* Rating */](track.uri, rating);
        // search for existing rating
        var obj = this.ratings.find(function (obj) {
            return obj.trackURI === track.uri;
        });
        if (obj === undefined) {
            this.ratings.push(newRating);
        }
        else {
            var xxx = this.ratings.findIndex(function (obj) {
                return obj.trackURI === track.uri;
            });
            this.ratings.splice(xxx, 1, newRating);
        }
        localStorage.setItem('ratings', JSON.stringify(this.ratings));
        // update track rating
        this.track.rating = rating;
        // TODO enable next line via user preference, for now do automatically
        // this.playNextPrevious('next');
    };
    NowPlayingComponent.prototype.playNextPrevious = function (direction) {
        var _this = this;
        this.loadingTrack = true;
        this.spotifyService.playNextPrevious(direction).subscribe(function (res) {
            // update track
            var intervalId = setInterval(function () { return _this.getCurrentlyPlaying(intervalId); }, 1500);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    NowPlayingComponent.prototype.stop = function () {
        var _this = this;
        this.spotifyService.controlPlayback(null, 'pause').subscribe(function (res) {
            _this.track.is_playing = false;
            clearTimeout(_this.timerProgressBar);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    NowPlayingComponent.prototype.play = function () {
        var _this = this;
        this.spotifyService.controlPlayback(null, 'play').subscribe(function (res) {
            _this.track.is_playing = true;
            _this.computeTime(_this);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    NowPlayingComponent.prototype.viewAlbum = function () {
        localStorage.setItem('albumID', this.track.albumID);
        this.router.navigateByUrl('/album');
    };
    NowPlayingComponent.prototype.viewArtist = function (artistID) {
        localStorage.setItem('artistID', artistID);
        this.router.navigateByUrl('/artist');
    };
    return NowPlayingComponent;
}());
NowPlayingComponent = NowPlayingComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'now-playing',
        template: __webpack_require__("../../../../../src/app/components/now-playing/now-playing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/now-playing/now-playing.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NowPlayingComponent);

var NowPlayingComponent_1, _a, _b, _c;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/now-playing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons {\n  font-size: 48px;\n  cursor: pointer;\n  margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<meta http-equiv=\"refresh\" content=\"3600\">-->\n<div *ngIf=\"selectedPlaylist === undefined\">\n  selectedPlaylist is undefined\n</div>\n\n<div *ngIf=\"selectedPlaylist === null\">\n  selectedPlaylist is null\n</div>\n\n<div *ngIf=\"selectedPlaylist !== undefined && selectedPlaylist !== null\">\n  <h2>{{ selectedPlaylist.name }}</h2>\n  <img src=\"{{selectedPlaylist.images[0]?.url}}\" class=\"img-responsive\">\n  <!--<h5>No. of Tracks: {{selectedPlaylist.tracks.total}}</h5>-->\n  {{ stars0 }} Unrated\n  <a href=\"javascript:void(0)\" (click)=\"playRating(0, 'play')\">\n    Play <i class=\"glyphicon glyphicon-play\"></i>\n  </a>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(0, 'createPlaylist')\">Create Playlist <i class=\"glyphicon glyphicon-file\"></i></a>\n  <br>\n  {{ stars3 }}\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'THUMBS'\" class=\"glyphicon glyphicon-thumbs-down\"></i>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(3, 'play')\">Play <i class=\"glyphicon glyphicon-play\"></i></a>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(3, 'createPlaylist')\">Create Playlist <i class=\"glyphicon glyphicon-file\"></i></a>\n  <br>\n  {{ stars4 }}\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'THUMBS'\" class=\"glyphicon glyphicon-hand-right\"></i>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(4, 'play')\">Play <i class=\"glyphicon glyphicon-play\"></i></a>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(4, 'createPlaylist')\">Create Playlist <i class=\"glyphicon glyphicon-file\"></i></a>\n  <br>\n  {{ stars5 }}\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'STARS'\" class=\"glyphicon glyphicon-star\"></i>\n  <i *ngIf=\"ratingSystem === 'THUMBS'\" class=\"glyphicon glyphicon-thumbs-up\"></i>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(5, 'play')\">Play <i class=\"glyphicon glyphicon-play\"></i></a>\n  <a href=\"javascript:void(0)\" (click)=\"playRating(5, 'createPlaylist')\">Create Playlist <i class=\"glyphicon glyphicon-file\"></i></a>\n  <br>\n  <a href=\"javascript:void(0)\" (click)=\"playAllTracks()\">\n    Play All <i class=\"glyphicon glyphicon-play\"></i>\n  </a>\n  <a href=\"javascript:void(0)\" (click)=\"updateCounts()\">\n    Update Counts <i class=\"glyphicon glyphicon-repeat\"></i>\n  </a>\n  <br>\n  <a routerLink=\"/nowplaying\">Now Playing</a>\n\n\n  <!--loop through tracks-->\n  <div *ngIf=\"tracks !== null && tracks !== undefined\">\n    {{ playlist.total }} tracks in playlist\n    <!--TODO make the controls a directive-->\n    <div *ngIf=\"playlist.previous !== null\">\n      <a (click)=\"loadOffset(playlist.previous)\" href=\"javascript:void(0)\">\n        Previous\n        <i class=\"glyphicon glyphicon-fast-backward\"></i>\n      </a>\n    </div>\n    <div *ngIf=\"playlist.next !== null\">\n      <a (click)=\"loadOffset(playlist.next)\" href=\"javascript:void(0)\">\n        Next\n        <i class=\"glyphicon glyphicon-step-forward\"></i>\n      </a>\n    </div>\n\n    <table>\n      <tr *ngFor=\"let track of tracks; let i = index\">\n        <td>\n          <img src=\"{{track.track.album.images[2]?.url}}\" class=\"btn btn-success\" style=\"margin: 5px;\" (click)=\"playTrack(track.track)\">\n        </td>\n        <td>\n          {{ track.track.name }} - by\n          <span *ngFor=\"let artist of track.track.artists; let i = index\">\n            <a (click)=\"viewArtist(artist.id)\" [routerLink]=\"\">{{ artist.name }}</a><span *ngIf=\"i < track.track.artists.length - 1\">, </span>\n          </span>\n          <br>\n          <i class=\"glyphicon glyphicon-thumbs-down icons\"\n             id=\"{{'THUMBS3-' + track.track.id}}\"\n             [class.star-selected]=\"track.track.rating === 3\"\n             (click)=\"setRating(3, track.track)\"></i>\n          <i class=\"glyphicon glyphicon-hand-right icons\"\n             id=\"{{'THUMBS4-' + track.track.id}}\"\n             [class.star-selected]=\"track.track.rating === 4\"\n             (click)=\"setRating(4, track.track)\"></i>\n          <i class=\"glyphicon glyphicon-thumbs-up icons\"\n             id=\"{{'THUMBS5-' + track.track.id}}\"\n             [class.star-selected]=\"track.track.rating === 5\"\n             (click)=\"setRating(5, track.track)\"></i>\n        </td>\n      </tr>\n    </table>\n\n    <div *ngIf=\"playlist.previous !== null\">\n      <a (click)=\"loadOffset(playlist.previous)\" href=\"javascript:void(0)\">\n        Previous\n        <i class=\"glyphicon glyphicon-fast-backward\"></i>\n      </a>\n    </div>\n    <div *ngIf=\"playlist.next !== null\">\n      <a (click)=\"loadOffset(playlist.next)\" href=\"javascript:void(0)\">\n        Next\n        <i class=\"glyphicon glyphicon-step-forward\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_rating__ = __webpack_require__("../../../../../src/app/classes/rating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__now_playing_now_playing_component__ = __webpack_require__("../../../../../src/app/components/now-playing/now-playing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaylistComponent = (function () {
    function PlaylistComponent(_http, _spotifyService, alertService, router) {
        this._http = _http;
        this._spotifyService = _spotifyService;
        this.alertService = alertService;
        this.router = router;
        this.stars0 = 0;
        this.stars1 = 0;
        this.stars2 = 0;
        this.stars3 = 0;
        this.stars4 = 0;
        this.stars5 = 0;
        this.ratingSystem = 'THUMBS';
        this.offset = 0;
        this.ratingsLoaded = false;
    }
    PlaylistComponent.prototype.ngAfterViewChecked = function () {
        // console.log('ngAfterViewChecked called.');
        if (this.tracksLoaded && !this.ratingsLoaded)
            this.getRatings();
        // console.log('ratingsLoaded=' + this.ratingsLoaded);
    };
    PlaylistComponent.prototype.clearRatingCounts = function () {
        this.stars0 = 0;
        this.stars1 = 0;
        this.stars2 = 0;
        this.stars3 = 0;
        this.stars4 = 0;
        this.stars5 = 0;
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        // console.log('ngOnInit called.');
        this.selectedPlaylist = JSON.parse(localStorage.getItem('selectedPlaylist'));
        document.body.style.backgroundImage = 'url(\'' + this.selectedPlaylist.images[0].url + '\')';
        this.loadPlaylist();
        // this.ratingSystem = (localStorage.getItem('ratingSystem') !== null) ? localStorage.getItem('ratingSystem') : 'STARS';
    };
    PlaylistComponent.prototype.loadPlaylist = function () {
        var _this = this;
        this._spotifyService.getPlaylist(this.selectedPlaylist, 0).subscribe(function (res) {
            _this.tracks = res.items;
            _this.playlist = res;
            // get all the other tracks
            if (_this.playlist.total > (_this.playlist.limit + _this.playlist.offset)) {
                _this.showAllTracks();
            }
            else {
                _this.tracksLoaded = true;
            }
        }, function (err) {
            // console.log('Error: ' + err.statusText);
            window.open(_this._spotifyService.getAuthorizeURL(), '_self');
            throw new Error(err.statusText);
        });
    };
    PlaylistComponent.prototype.setRating = function (rating, track) {
        console.log("Setting rating to " + rating + " for " + track.name);
        var elem = document.getElementById(this.ratingSystem + rating);
        // console.log();
        __WEBPACK_IMPORTED_MODULE_5__now_playing_now_playing_component__["a" /* NowPlayingComponent */].showStars(rating, track.id, null);
        var newRating = new __WEBPACK_IMPORTED_MODULE_4__classes_rating__["a" /* Rating */](track.uri, rating);
        // search for existing rating
        var obj = undefined;
        if (this.ratings !== undefined) {
            obj = this.ratings.find(function (obj) {
                return obj.trackURI === track.uri;
            });
        }
        else {
            this.ratings = [];
        }
        // no rating
        if (obj === undefined) {
            this.ratings.push(newRating);
        }
        else {
            var oldRating_1 = -1;
            var xxx = this.ratings.findIndex(function (obj) {
                oldRating_1 = track.rating;
                return obj.trackURI === track.uri;
            });
            // decrement any previous rating!
            if (oldRating_1 === 0)
                this.stars0--;
            if (oldRating_1 === 1)
                this.stars1--;
            if (oldRating_1 === 2)
                this.stars2--;
            if (oldRating_1 === 3)
                this.stars3--;
            if (oldRating_1 === 4)
                this.stars4--;
            if (oldRating_1 === 5)
                this.stars5--;
            this.ratings.splice(xxx, 1, newRating);
        }
        // update local storage
        localStorage.setItem('ratings', JSON.stringify(this.ratings));
        // increment
        if (rating === 0)
            this.stars0++;
        if (rating === 1)
            this.stars1++;
        if (rating === 2)
            this.stars2++;
        if (rating === 3)
            this.stars3++;
        if (rating === 4)
            this.stars4++;
        if (rating === 5)
            this.stars5++;
        // update local track
        track.rating = rating;
        // auto play
        // this._spotifyService.playNextPrevious('next').subscribe(res => {
        //     // update track
        //     // const intervalId = setInterval(() => this.getCurrentlyPlaying(intervalId), 1500);
        //   },
        //   err => {
        //     console.error(err);
        //     this.alertService.error(err._body);
        //   }
        // )
    };
    PlaylistComponent.prototype.getRatings = function () {
        if (this.tracks === undefined) {
            console.log('Tracks not yet defined so not getting ratings.');
            return;
        }
        var traxx = this.tracks;
        if (localStorage.getItem('ratings') !== null) {
            this.ratings = JSON.parse(localStorage.getItem('ratings'));
            console.log('Loaded ' + this.ratings.length + ' ratings.');
            // loop through all tracks and adjust stars
            console.log("Looping through tracks for ratings, system " + this.ratingSystem);
            var _loop_1 = function (x) {
                // first ensure is loaded in DOM
                var elemName = this_1.ratingSystem + '3-' + this_1.tracks[x].track.id;
                // console.log(`Searching for element ${elemName}`);
                if (document.getElementById(elemName) === null) {
                    console.log("Exiting for loop because could not find element " + elemName);
                    return "break";
                }
                else {
                    // console.log(`Found element ${elemName}`);
                }
                // see if have rating
                var obj = undefined;
                if (this_1.ratings !== undefined) {
                    obj = this_1.ratings.find(function (obj) {
                        return obj.trackURI === traxx[x].track.uri;
                    });
                }
                else {
                    this_1.ratings = [];
                }
                // set to 0 if no rating
                if (obj !== undefined) {
                    this_1.tracks[x].track.rating = obj.rating;
                }
                else {
                    this_1.tracks[x].track.rating = 0;
                }
                // change the HTML
                __WEBPACK_IMPORTED_MODULE_5__now_playing_now_playing_component__["a" /* NowPlayingComponent */].showStars(this_1.tracks[x].track.rating, this_1.tracks[x].track.id, null);
                // increment
                if (this_1.tracks[x].track.rating === 0)
                    this_1.stars0++;
                if (this_1.tracks[x].track.rating === 1)
                    this_1.stars1++;
                if (this_1.tracks[x].track.rating === 2)
                    this_1.stars2++;
                if (this_1.tracks[x].track.rating === 3)
                    this_1.stars3++;
                if (this_1.tracks[x].track.rating === 4)
                    this_1.stars4++;
                if (this_1.tracks[x].track.rating === 5)
                    this_1.stars5++;
            };
            var this_1 = this;
            for (var x in this.tracks) {
                var state_1 = _loop_1(x);
                if (state_1 === "break")
                    break;
            }
            console.log('Done looping through tracks for ratings');
            this.ratingsLoaded = true;
        }
        else {
            console.log('No ratings found in local storage');
        }
    };
    PlaylistComponent.prototype.showAllTracks = function () {
        var _this = this;
        // call with offset, and then add
        this._spotifyService.getURL(this.playlist.next).subscribe(function (res) {
            console.log("Adding " + res.items.length + " items to tracks array (" + _this.playlist.total + " total).");
            // update next URL so the offset changes
            _this.playlist.next = res.next;
            // push new tracks
            res.items.forEach(function (element) {
                _this.tracks.push(element);
            });
            // get all the other tracks
            if (_this.playlist.total > _this.tracks.length) {
                _this.showAllTracks();
            }
            else {
                _this.tracksLoaded = true;
            }
        }, function (err) {
            throw new Error(err.statusText);
        });
    };
    PlaylistComponent.prototype.updateCounts = function () {
        this.clearRatingCounts();
        this.getRatings();
    };
    PlaylistComponent.prototype.loadOffset = function (url) {
        var _this = this;
        this._spotifyService.getURL(url).subscribe(function (res) {
            _this.tracks = res.items;
            _this.playlist = res;
        }, function (err) {
            throw new Error(err.statusText);
        });
    };
    PlaylistComponent.prototype.playRating = function (rating, action) {
        var _this = this;
        var arrTracks = [];
        for (var x in this.tracks) {
            // console.log(this.tracks[x].uri + ' ' + this.tracks[x].rating);
            if (this.tracks[x].track.rating === rating) {
                arrTracks.push(this.tracks[x].track.uri);
            }
        }
        if (arrTracks.length > 0) {
            if (action === 'play') {
                this.alertService.info('Playing selected tracks');
                this._spotifyService.controlPlayback({ uris: arrTracks }, 'play').subscribe(function (res) {
                    console.log('Playback successfully called');
                }, function (err) {
                    console.error(err);
                    _this.alertService.error(err._body);
                });
            }
            else {
                this.alertService.info('Creating new playlist');
                // TODO get playlist name from user?
                var playlistName_1 = rating + '-star Tracks';
                // first create playlist, then add tracks
                this._spotifyService.createPlaylist({ name: playlistName_1 }).subscribe(function (res) {
                    _this._spotifyService.addToPlaylist({ uris: arrTracks }, res.id).subscribe(function (res2) {
                        _this.alertService.success('Created new playlist ' + playlistName_1 + ' with ' + arrTracks.length + ' tracks.');
                    }, function (err) {
                        console.error(err);
                        _this.alertService.error(err._body);
                    });
                }, function (err) {
                    console.error(err);
                    _this.alertService.error(err._body);
                });
            }
        }
        else {
            this.alertService.info('No songs assigned to this rating.');
        }
    };
    PlaylistComponent.prototype.playAllTracks = function () {
        var _this = this;
        this._spotifyService.controlPlayback({ context_uri: this.selectedPlaylist.uri }, 'play').subscribe(function (res) {
            _this.alertService.success('Playing all tracks in playlist');
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    PlaylistComponent.prototype.playTrack = function (track) {
        var _this = this;
        localStorage.setItem('selectedTrack', JSON.stringify(track));
        // now tell to play
        this._spotifyService.controlPlayback({ uris: [track.uri] }, 'play').subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.error(err);
            _this.alertService.error(err._body);
        });
    };
    ;
    PlaylistComponent.prototype.viewArtist = function (artistID) {
        localStorage.setItem('artistID', artistID);
        this.router.navigateByUrl('/artist');
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'playlist',
        template: __webpack_require__("../../../../../src/app/components/playlist/playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PlaylistComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"playlists !== null\">\n  Showing {{playlists.offset}} to\n  <span *ngIf=\"playlists.next !== null\">{{(playlists.limit+playlists.offset)}}</span>\n  <span *ngIf=\"playlists.next === null\">{{playlists.total}}</span>\n  of {{playlists.total}} playlists.\n  <div *ngIf=\"playlists.previous !== null\">\n    <a (click)=\"loadOffset(playlists.previous)\" href=\"javascript:void(0)\">Previous</a>\n  </div>\n  <div *ngIf=\"playlists.next !== null\">\n    <a (click)=\"loadOffset(playlists.next)\" href=\"javascript:void(0)\">Next</a>\n  </div>\n  <ol>\n    <li *ngFor=\"let playlist of playlists.items; let i = index\">\n      <button class=\"btn btn-success\" (click)=\"setPlaylist(playlist)\" style=\"margin: 5px;\">\n        <img src=\"{{playlist.images[0].url}}\" width=\"50\" height=\"50\">\n      </button>\n      <a (click)=\"setPlaylist(playlist)\" href=\"javascript:void(0)\">{{playlist.name}}</a>\n    </li>\n  </ol>\n</div>\n\n<div>\n  <a (click)=\"refreshPlaylists()\" href=\"javascript:void(0)\">Refresh playlists</a>\n</div>\n<br><br><br>\n"

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistsComponent = (function () {
    function PlaylistsComponent(_spotifyService, alertService, router) {
        this._spotifyService = _spotifyService;
        this.alertService = alertService;
        this.router = router;
        this.priv = 'Privy';
        this.pub = 'Pubby';
    }
    PlaylistsComponent.prototype.ngOnInit = function () {
        // check if we have playlists
        if (localStorage.getItem('playlists') === null) {
            this.retrievePlaylists();
            this.alertService.info('Retrieved playlists.');
        }
        else {
            this.playlists = JSON.parse(localStorage.getItem('playlists'));
            this.alertService.info('Loaded playlists from local data.');
        }
    };
    PlaylistsComponent.prototype.refreshPlaylists = function () {
        this.playlists = null;
        localStorage.removeItem('playlists');
        this.retrievePlaylists();
        this.alertService.info('Refreshed playlists.');
    };
    PlaylistsComponent.prototype.reAuthorize = function (intervalId) {
        // TODO handle auth token globally via new Error
        window.open(this._spotifyService.getAuthorizeURL(), '_self');
        clearInterval(intervalId);
    };
    PlaylistsComponent.prototype.retrievePlaylists = function () {
        var _this = this;
        this._spotifyService.getPlaylists().subscribe(function (res) {
            _this.playlists = res;
            localStorage.setItem('playlists', JSON.stringify(res));
        }, function (err) {
            _this.alertService.warn('Error retrieving playlists: ' + err.statusText);
            _this.alertService.info('Re-authorizing Spotify token in 2 seconds...');
            var intervalId = setInterval(function () { return _this.reAuthorize(intervalId); }, 2000);
            // throw new Error(err.statusText);
        });
    };
    PlaylistsComponent.prototype.setPlaylist = function (playlist) {
        localStorage.setItem('selectedPlaylist', JSON.stringify(playlist));
        // this.alertService.success('Set playlist ID to ' + playlist.id);
        this.router.navigateByUrl('/playlist');
    };
    PlaylistsComponent.prototype.loadOffset = function (url) {
        var _this = this;
        this._spotifyService.getURL(url).subscribe(function (res) {
            _this.playlists = res;
            localStorage.setItem('playlists', JSON.stringify(res));
        }, function (err) {
            throw new Error(err.statusText);
        });
    };
    PlaylistsComponent.prototype.showPlaylist = function (offset) {
        var _this = this;
        this._spotifyService.getPlaylist('46JHZX9X1hHUpxhZCkKuS1', offset).subscribe(function (res) {
            console.log(res);
            _this.tracks = res.items;
            localStorage.setItem('tracks-' + offset, JSON.stringify(res.items));
        }, function (err) {
            // console.log('Error: ' + err.statusText);
            throw new Error(err.statusText);
        });
    };
    return PlaylistsComponent;
}());
PlaylistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'playlists',
        template: __webpack_require__("../../../../../src/app/components/playlists/playlists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlists/playlists.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PlaylistsComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/playlists.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  width: 800px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label>Token\n      <input type=\"text\" [(ngModel)]=\"bearerToken\" name=\"zorg\" class=\"form-control\">\n    </label>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"setBearerToken()\">Set Token</button>\n  </div>\n</form>\n<div *ngIf=\"bearerToken === null\">\n  No bearerToken found in local storage.\n</div>\n\n<hr>\n<stats></stats>\n<a (click)=\"clearRatings()\" href=\"javascript:void(0)\" class=\"btn btn-danger\">Clear ratings</a>\n\n<hr>\n<login></login>\n\n<!--<hr>-->\n<!--Rating system. 5/3 stars or 3 thumbs (no, yes, maybe)-->\n<!--<p>-->\n<!--  <label for=\"STARS\">Stars 5</label>-->\n<!--  <input type=\"radio\" name=\"ratingSystem\" id=\"STARS\" value=\"STARS\" (click)=\"setRatingSystem('STARS')\" [ngModel]=\"ratingSystem\">-->\n<!--  <label for=\"STARS3\">Stars 3</label>-->\n<!--  <input type=\"radio\" name=\"ratingSystem\" id=\"STARS3\" value=\"STARS3\" (click)=\"setRatingSystem('STARS3')\" [ngModel]=\"ratingSystem\">-->\n<!--  <label for=\"THUMBS\">Thumbs</label>-->\n<!--  <input type=\"radio\" name=\"ratingSystem\" id=\"THUMBS\" value=\"THUMBS\" (click)=\"setRatingSystem('THUMBS')\" [ngModel]=\"ratingSystem\">-->\n<!--</p>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(alertService) {
        this.alertService = alertService;
        this.ratingSystem = 'THUMBS';
        this.bearerToken = localStorage.getItem('bearerToken');
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // console.log(localStorage.getItem('ratingSystem'));
        // this.ratingSystem = (localStorage.getItem('ratingSystem') !== null) ? localStorage.getItem('ratingSystem') : AppSettings.RATING_SYSTEMS.STARS5;
    };
    SettingsComponent.prototype.setBearerToken = function () {
        localStorage.setItem('bearerToken', this.bearerToken);
        console.log('Updated local storage.' + this.bearerToken);
    };
    SettingsComponent.prototype.clearRatings = function () {
        localStorage.removeItem('ratings');
        this.alertService.success('Cleared ratings');
    };
    SettingsComponent.prototype.setRatingSystem = function (ratingSystem) {
        console.log(ratingSystem);
        localStorage.setItem('ratingSystem', ratingSystem);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-size: 32px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ratings.length}} ratings found.\n  <br><br>\n<!--  {{stars1}}-->\n<!--  <i class=\"glyphicon glyphicon-star-empty\"></i>-->\n<!--  <br>-->\n<!--  {{stars2}}-->\n<!--  <i class=\"glyphicon glyphicon-star-empty\"></i>-->\n<!--  <i class=\"glyphicon glyphicon-star-empty\"></i>-->\n<!--  <br>-->\n  {{stars3}}\n  <i class=\"glyphicon glyphicon-thumbs-down\"></i>\n  <br>\n  {{stars4}}\n  <i class=\"glyphicon glyphicon-hand-right\"></i>\n  <br>\n  {{stars5}}\n  <i class=\"glyphicon glyphicon-thumbs-up\"></i>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
        this.stars1 = 0;
        this.stars2 = 0;
        this.stars3 = 0;
        this.stars4 = 0;
        this.stars5 = 0;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.ratings = JSON.parse(localStorage.getItem('ratings'));
        console.log(this.ratings.length + ' ratings found.');
        // TODO perhaps use angular filter to get ratings instead of javascript loop
        for (var i = 0; i < this.ratings.length; i++) {
            if (this.ratings[i].rating === 1)
                this.stars1++;
            if (this.ratings[i].rating === 2)
                this.stars2++;
            if (this.ratings[i].rating === 3)
                this.stars3++;
            if (this.ratings[i].rating === 4)
                this.stars4++;
            if (this.ratings[i].rating === 5)
                this.stars5++;
        }
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'stats',
        template: __webpack_require__("../../../../../src/app/components/stats/stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stats/stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n     {{alert.message}}\n     <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/alert.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/spotify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpotifyService = (function () {
    function SpotifyService(_http, alertService, lokation) {
        this._http = _http;
        this.alertService = alertService;
        // save state to return if token expired
        var currentState = location.pathname.substring(1);
        if (currentState !== 'callback') {
            localStorage.setItem('savedState', currentState);
        }
        // TODO remove hard-coded user ID
        this.userID = 'x1111x';
        this.bearerToken = localStorage.getItem('bearerToken');
        this.baseURL = location.hostname;
        if (location.port !== '') {
            this.baseURL += ':' + location.port;
        }
        console.log("Base URL: " + this.baseURL, location);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.bearerToken });
    }
    SpotifyService.prototype.getPlaylist = function (playlist, offset) {
        var spotURL = 'https://api.spotify.com/v1/users/' + playlist.owner.id + '/playlists/' + playlist.id + '/tracks?offset=' + offset;
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchMusic = function (searchString, type) {
        var spotURL = 'https://api.spotify.com/v1/search?q=' + searchString + '&type=' + type;
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (artistID) {
        var spotURL = 'https://api.spotify.com/v1/artists/' + artistID;
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtistAlbums = function (artistID) {
        var spotURL = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.playNextPrevious = function (direction) {
        var URL = 'https://api.spotify.com/v1/me/player/' + direction;
        return this._http.post(URL, null, { headers: this.headers });
    };
    ;
    SpotifyService.prototype.getCurrentlyPlaying = function () {
        var URL = 'https://api.spotify.com/v1/me/player/currently-playing';
        return this._http.get(URL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ;
    SpotifyService.prototype.controlPlayback = function (body, verb) {
        var URL = 'https://api.spotify.com/v1/me/player/' + verb;
        return this._http.put(URL, body, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ;
    SpotifyService.prototype.getAuthorizeURL = function () {
        var client_id = 'e8629f625be5446a8434f03c0063ac27';
        var response_type = 'token'; // Implicit Grant Flow https://developer.spotify.com/web-api/authorization-guide/#implicit-grant-flow
        var redirect_uri = 'http://' + this.baseURL + '/callback';
        var scopes = 'user-read-currently-playing user-read-playback-state playlist-modify-private playlist-modify-public playlist-read-private streaming user-modify-playback-state user-read-currently-playing user-read-recently-played';
        console.log('Spotify scopes: ' + scopes);
        this.authURL = 'http://accounts.spotify.com/authorize?client_id=' + client_id +
            '&scope=' + encodeURIComponent(scopes) +
            '&response_type=' + response_type +
            '&show_dialog=false' +
            '&redirect_uri=' + encodeURIComponent(redirect_uri);
        // console.log(this.authURL);
        return this.authURL;
    };
    SpotifyService.prototype.getURL = function (spotURL) {
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getPlaylists = function () {
        var spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.createPlaylist = function (body) {
        var spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
        return this._http.post(spotURL, body, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.addToPlaylist = function (body, playlistID) {
        var spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/' + playlistID + '/tracks';
        return this._http.post(spotURL, body, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (albumID) {
        var spotURL = 'https://api.spotify.com/v1/albums/' + albumID;
        return this._http.get(spotURL, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _c || Object])
], SpotifyService);

var _a, _b, _c;
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/spotify.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/russellsaintcyr/projects/playlist-webapp/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map