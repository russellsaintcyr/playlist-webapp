# Playlist rater

This project was started in 2017 to help me resolve a musical challenge. Each year I create a Spotify playlist of songs that I discover and like. At year end, I typically have added 200-300 songs. I wanted a way to select my favorite 40 songs, partly a tribute to growing up with with American Top 40 and Kasey Kasem. Spotify offers no way to rate tracks, and it was frustrating manually adding songs to a new playlist.  I wanted an easier and fun solution. So I created a browsere webapp which accesses the Spotify API and allows me to play and rate tracks as I listen.

## Architecture
* AngularJS frontend
* Node.js and Express.js backend
* Heroku deployment, with Redis support
* OAuth integration with Spotify API
* Bootstrap for UI components
* Mongo support

## Changes made since original
I have made updates to the project each December as I found bugs or thought of improvements. 

* Upgraded to AngularJS 4 from 2
* Clickable artists and albums
* Added playback controls
* Larger album art sizes, also tiled as page background
* Replaced font-awesome with Bootstrap glyphicons
* Added time-playing progress bar
* Replaced paging with auto-loading of complete playistt

## Changes planned
* Save to DB instead of browser local storage
* Upgrade to Angular 13
* Use Material Design
* HTTPS support
* Allow user account creation and login
* Ability to manage playlists
* Ability to play albums and artist radio
* Support other music services besides Spotify

## Links
* The webapp on Heroku: http://playlist-rater.herokuapp.com/
* My Top 40 of 2020: https://open.spotify.com/playlist/0HIkuOQI4B0IIvj9fi65WP?si=9d7429d911a14663
* My Top 40 of 2019: https://open.spotify.com/playlist/7FCJyM9RVxYYRYOlSffNrF?si=1551c5fd1ab14c81
* My Top 40 of 2018: https://open.spotify.com/playlist/51wSFAsnu0LS7Z53Gy9L03?si=a8d26f54c17e444a
* My Top 40 of 2017: https://open.spotify.com/playlist/2QNzk2n6iahh5kit6fQ2NM?si=b4ddad7a56f8483d

## New project?
In 2021 I tried to update to Angular 13 using `ng update` but found all sorts of issues going from v4 to v6, and decided I would try a new project from scratch, cherry-picking components to keep but also built with Material and PWA support. 
