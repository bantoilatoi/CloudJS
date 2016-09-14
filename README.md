[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


[![cloudjs_small](https://cloud.githubusercontent.com/assets/7023876/12836797/32e88944-cbe6-11e5-95d2-6d5cfad8d085.png)](https://webmechanicx.github.io/CloudJS/)

###Introduction
CloudJS is a simple jQuery plugin and gives a flexible way to share a file with end user which they can store into their DropBox, Google Drive etc.

###Good Fit for:
1. Personal Site
2. Blog
3. Manazine and Newspaper.
4. Document Seller
5. And any other services which related to file sharing.


###Installation:
1. Add jQuery Library from local or any CDN site.
2. Include jQuery.Cloud.js from dist folder
3. Create a html block element `div` and add a custom data attribute `data-file-link` to hold the root path of your file e.g. images/wallpaper.jpg, doc/example.txt
4. Call Cloudjs, that's it!!


```javascript
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   <script src="dist/jQuery.Cloud.js"></script>
   <script>
   $(document).ready(function(){
		$('#cloudjs').Cloud({
		googleDrive : 'auto',
		dropBox : 'a1jy330vpyki64r'
		});
	});
   </script>
```


```html
   <div id="cloudjs" data-file-link="doc/example.txt"></div>

```


###Live Action:
<a href="https://webmechanicx.github.io/CloudJS/" target="_blank">Live Demo</a>


###CloudJS

A simple jQuery plugin, Let your visitor save a file into their DropBox, Google Drive etc.

[![oreilly_screenshot](https://cloud.githubusercontent.com/assets/7023876/12835170/03d9f920-cbd8-11e5-861c-b255209cdb2c.jpg)](http://www.oreilly.com)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/webmechanicx/cloudjs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

