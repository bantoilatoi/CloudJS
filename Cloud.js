/*
 * This is a JavaScript Library Which works for Cloud File Sharing/Store.
 * Released and Licenced under MIT
 * You can use this library in any number of your project for Free (commercial or non-commercial)
 * Author: Farhadur Rahim,
 * Email:  webmechanicx@gmail.com
 ***************************************************************************************************************************/

(function(w){

var Cloud = {};
var SaveAs;
var placeholder; // Work as a DOM Selector;


var file_array = ['//example.com/path/myfile.pdf', 'my_example.pdf', 'My Blog Name'];

/*@Initiate CloudJS by Calling METHOD "SaveAS"
 *@ Cloud.SaveAS (element, provider = ["DropBox", "GoogleDrive", "OneDrive"], options = {})
 *@ providers is OPTIONAL, By Default it appends three available cloud providers  
 */

Cloud = {
  var ref;
  var options   = [];
  var providers = [];
  var config    = {
                  'DropBox'     : [ 'a1jy330vpyki64', "https://www.dropbox.com/static/api/2/dropins.js"], 
                  'GoogleDrive' : [ 'a1jy330vpyki64', "https://apis.google.com/js/platform.js"], 
                  'OneDrive'    : [ 'a1jy330vpyki64', "https://apis.google.com/js/platform.js"]
                  };
  
  SaveAS        : function (placeholder, providers, options ){
                  for( var i = 0; i<providers.length; i++ ){
                  }
  },
  setProvider   : function(provider){
                  var cfg = provider.toUpperCase();
                  var ref, togetheref;
    
                  switch (cfg){
                     
			case "DROPBOX" :
			ref = document.createElement('script');
			ref.setAttribute("type","text/javascript");
			ref.setAttribute("src", config.DropBox[1]);
			ref.setAttribute("id", "dropboxjs");
			ref.setAttribute("data-app-key", config.DropBox[0]);
										
										
			break;
									 
			case "GOOGLEDRIVE" : 
			ref = document.createElement('script');
			ref.setAttribute("src", config.GoogleDrive[1]);
										
			
			break;
								   
			case "ONEDRIVE" :
			ref = document.createElement('script');
			ref.setAttribute("type","text/javascript");
			ref.setAttribute("id", "onedrive-js");
			ref.setAttribute("src", config.OneDrive[1]);
			ref.setAttribute("client-id", config.OneDrive[0]);
										
			break;
								   
			default		   : 
			//IMPROVEMENT OF THIS PART IN LATER VERSION
			ref  = '<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="a1jy330vpyki64r"></script>';
			ref += '<script src="https://apis.google.com/js/platform.js" async defer></script>';
			ref += '<script type="text/javascript" src="https://js.live.net/v5.0/OneDrive.js" id="onedrive-js" client-id="000000004C142703"></script>';
			break;
                     
                   }                
                
			if (typeof ref!="undefined")
			return document.getElementsByTagName("head")[0].appendChild(ref);
  }
};
})(window);
