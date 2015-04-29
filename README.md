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

The CSS was originally derived from [BassCSS](http://basscss.com), and as a result, the CSS is licensed under MIT. The CSS here should serve as a starting point for your CSS. It's enough to allow you to create any type of layout you want, and tweak it from there. It's only 14KB minified, and 3KB gzipped, paints extremely quickly, and maintains 60FPS no matter what.

The rest of the code is licensed under CC0:

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://github.com/bentranter/default">
    <span property="dct:title">Ben Tranter</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Default</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="CA" about="https://github.com/bentranter/default">
  Canada</span>.
</p>
