# Leightweight starter

An ultra lightweight starter for generating simple HTML + CSS + JS pages with modern developer tooling.

## Why?

Sometimes you just need a simple website, but you still love the luxuries of modern development, like new javascript syntax, autoprefixed CSS and hot reloading. But not the large bundle sizes that come with javascript frameworks these days. A minified production build of this repo is just 2kb, including HTML and CSS, and that's more than enough.

## Getting started

Clone the repo, remove the `.git` folder if you want to make your own and run:

```
$ yarn && yarn start
```

for production builds:

```
$ yarn dist
```

## What's included?

- A plain index.html file loaded
- Autoprefixed and minified CSS with Postcss
- Modern javascript syntax through babel
- Live reloading and optimized builds with webpack
