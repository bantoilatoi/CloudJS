/* plgName       : jQuery.Cloud.js
 * Licence       : MIT licensed - Copyright (C) 2015-2016 Farhadur Rahim @webmechanicx.
 * Released      : 02/07/2016
 * Version       : jQuery
 * Author	 : Farhadur Rahim <webmechanicx@gmail.com>
 * Description   : Zero Configuration, Only Dependency is jQuery and compatible with every version.
 * Usage:        : Please visit github page - https://webmechanicx.github.com/CloudJS/
 * repositoy     : https://github.com/webmechanicx/CloudJS/
 */

(function($) {
    $.fn.Cloud = function( options ) {
        
        var elem             	= $( this ),
            getButtons       	= '',
            cloudButtons     	= '',
            siteTitle        	= $(document).attr("title"),
            currentURI       	= window.location.href,
            uriBase		= currentURI.substring(0, currentURI.lastIndexOf('/')); //generating current URL without hash
            onlyfilename     	= '';
           
        /*add your own default settings for Cloud APIs*/
        /*@settings Google-Drive | Dropbox APIs and other if you wise to add*/
        
        var settings = $.extend({
            googleDrive  : 'auto', 
            dropBox      : 'a1jy330vpyki64r' // generate your own api from dropbox
        }, options);
       
        return this.each( function() {
		   
                   baseURL        =  uriBase + '/' + $(this).data("file-link");
                   onlyfilename     = uriBase.match(/.*\/([^/]+)\.([^?]+)/i)[1]; //return only a valid file
            
                   getButtons = getBtnHtml(settings, onlyfilename, baseURL);  /*get buttons chunk*/
                   $(this).append(getButtons); 
           
        }).promise().then(function(){   /*@call jQuery.promise for immediate invocation*/
                   
		if('dropBox' in settings){
                    var dropApi = document.createElement('script');
                    dropApi.setAttribute("type","text/javascript");
                    dropApi.setAttribute("src", 'https://www.dropbox.com/static/api/2/dropins.js');
                    dropApi.setAttribute("id", "dropboxjs");
                    dropApi.setAttribute("data-app-key", settings.dropBox);
                    document.getElementsByTagName("head")[0].appendChild(dropApi);
            }
									 
		if('googleDrive' in settings){
                    var googleApi = document.createElement('script');
                    googleApi.setAttribute("src", 'https://apis.google.com/js/platform.js');
                    googleApi.setAttribute("async", true);
                    googleApi.setAttribute("defer", true);
                    document.getElementsByTagName("head")[0].appendChild(googleApi);
            }
            
        });
        
       function getBtnHtml(settings, onlyfilename, uriBase){
		cloudButtons = '';
                if('googleDrive' in settings){
			        cloudButtons += '<a class="g-savetodrive" data-src="' + uriBase + '" data-filename="' + onlyfilename + '" data-sitename="' + siteTitle + '"></a>';	
    		    }    
		        if('dropBox' in settings){
			       cloudButtons += '<a href="' + uriBase + '" class="dropbox-saver"></a>';
		          }
           
		return cloudButtons;
        }
    }
    
}(jQuery));
