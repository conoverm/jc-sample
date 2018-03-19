I did this in Vue.js to see if Vue is actually as easy to pick up as advertised. Vue has concepts borrowed from more popular frameworks -- if a developer has experience in React and Angular the learning curve is not quite as steep.

I used the VueJS starter project, you'll likely see references to Vue starter and in various parts of the code. Everything in '@/components/' and '@/resources' I wrote myself. I did a little modifying of Webpack and PostCSS to include the Lost Grid library and moving over Webpack settings from the master branch. I didn't actually end up using much of Lost Grid, and could remove it. Reset.css is now found in '@/assets/css'.

The files are arranged by feature tree in the components directory. In resources, it's mostly a sock drawer situation -- everything jumbled in one place. Were there more resources it would become necessary to arrange them in a more coherent manner. I'd also prefer to use Webpack to output an env var script, so the API URL 1) would not need to be repeated in all the resources and 2) it could be modified at build time depending on deploy target.

The frontend is on port 8005, the backend is on port 8004. `npm i` and `npm run start` to start both the frontend and the backend in dev mode. Then point the browser to http://localhost:8005. I took a glance at it after building, and it appears to work fine. If you're interested in looking at the built version:
`npm i -g serve` -- a great, simple web server
`serve dist -p 8005` -- from the root of the project.
and also: `npm run server` for the backend, in another terminal window is easiest.

Matthew Conover
conoverm@gmail.com

