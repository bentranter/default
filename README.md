##Default

Defaults you can use with every web project.

####Usage

```bash
$ git clone https://github.com/bentranter/default.git <projectname>
$ cd <projectname>
$ subl ./
```

Or use a bash function
```bash
$ default () { git clone https://github.com/bentranter/default.git "$1" && cd "$1"; }
$ default New_Project
```

####About

The CSS was derived from [BassCSS](http://basscss.com). I've made a lot of changes to suit my needs. The CSS here should serve as a starting point for your CSS. It's enough to allow you to create any type of layout you want, and tweak it from there. It's only 14KB minified, and 3KB gzipped, paints extremely quickly, and maintains 60FPS no matter what.

I'll update the versions of BassCSS as they get released.
