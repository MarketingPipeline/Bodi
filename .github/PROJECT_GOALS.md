## Project Goals

This project aims to re-create Kodi in more modern techonlogy. Allowing a community of more developers to develop plugins, themes & more (<b>read more to find out how</b>). Ideally, there will be two versions
of <b>Bodi</b>. A completly static basic version that can be deployed to even GitHub Pages etc as well a server based version that includes a backend possibly via PHP, NodeJS etc...


### Static Version 

The goal is the static version will be able to connect to other <b>Bodi</b> server instances & play media from there, install (supported static) addons, import movies / media file paths etc via JSON.

### Server Version

The goal for the server based is to have two versions - 

1. version that can be deployed & run on a simple web server running PHP (with the ability to share some content / libary content - maybe via API etc?)
2. a executable version to run / deploy locally. With the ability to share media libraries to static <b>Bodi</b> instances and more. 

The idea is to do something like this - [benflix: Beautify your movie collection with a Netflix-like, one-file index page.](https://github.com/benji1000/benflix) then make addon's that allow developers to create plugins for <b>Bodi</b> in Node.JS (via [node.php](https://github.com/niutech/node.php)), Python (via Web Assembly possibly etc)

> Notes: not saying PHP is the best route for this project, but if the server version is developed in PHP, a plugin could possibily be developed to auto-download / install Node.php (Node.js) & etc to server to be able to expland the plugin options / development options. 

