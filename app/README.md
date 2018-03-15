# Razzle x After.js

## How to use

Download the example [or clone the whole project](https://github.com/jaredpalmer/razzle.git):

```bash
curl https://codeload.github.com/jaredpalmer/razzle/tar.gz/master | tar -xz --strip=2 razzle-master/examples/with-afterjs
cd with-afterjs
```

Install it and run:

```bash
yarn install
yarn start
```

## Idea behind the example

This is a basic, bare-bones example of how to use After.js and Razzle.

### How I decide to use an off-the-shelf library, or write my own, or compromise:

Custom select input and CSS:  
File sizes after gzip:  

 58.79 KB build/static/js/bundle.42a72bd5.js  
 42.06 KB build/static/js/0.2a1608f2.chunk.js  
 33.25 KB build/static/js/2.f4452a90.chunk.js  
 33.25 KB build/static/js/1.bfe7359d.chunk.js  
 139 B build/static/css/bundle.890b65a9.css

With “AntD” form library - only using Select + Input element, no CSS:  
File sizes after gzip:

362.47 KB (+320.41 KB) build/static/js/0.285f6981.chunk.js  
 58.79 KB build/static/js/bundle.04572243.js  
 33.25 KB (+1 B) build/static/js/1.271f6c95.chunk.js  
 33.25 KB (-1 B) build/static/js/2.26c80a0d.chunk.js  
 139 B build/static/css/bundle.890b65a9.css

With “react-select-plus” library - only using select, no CSS:  
File sizes after gzip:

58.79 KB (-1.87 KB) build/static/js/bundle.de3b24df.js  
 56.28 KB (-32.99 KB) build/static/js/0.ad1481c2.chunk.js  
 47.51 KB (-30.86 KB) build/static/js/1.bc1355b7.chunk.js  
 33.25 KB build/static/js/2.f4452a90.chunk.js  
 139 B build/static/css/bundle.890b65a9.css
