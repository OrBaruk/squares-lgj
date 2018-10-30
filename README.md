# squares-lgj

Squares-lgj is a quick game made for the [ithc.io Lisp Game Jam 2018](https://itch.io/jam/lisp-game-jam-2018) using [clojurescript](https://clojurescript.org/), [figwheel](https://github.com/bhauman/lein-figwheel) and [quill](http://quil.info/)

Inspired by an old homebrew PSP game made by Globware, [Squarez](http://www.globware.com/psphomebrew_squarez.php)

Collect the green squares and avoid the red ones, it's that simple, control using your mouse.

## Demo
A playable online demo is available at https://orbaruk.github.io

## Running development environment
Run `lein figwheel` and open [localhost:3449](http://localhost:3449) in your browser to enjoy fighweel hot reloading goodness.

## Building from source

Run `lein cljsbuild once optimized`, this will generate `resources/public/index.html` and `resources/public/js/main.js` which can be hosted on your server on opened locally on your favorite web browser.

## License
MIT License

Copyright (c) 2018 Alexandre Or Cansian Baruque

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
