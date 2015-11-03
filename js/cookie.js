/*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl,@etoah(Lucien), Filament Group, Inc. Licensed MIT */

define(
	function(){
		return function cookie( name, value, days ){
			if(name===undefined)//// if name is undefined, return the serilized cookie
			{
				var cookieObj={},
					equalIndex;
				var cookies = window.document.cookie.split( ";" );
				for(var i=0;i<cookies.length;i++)
				{
					equalIndex=cookies[i].indexOf('=');
					cookieObj[cookies[i].substring(0,equalIndex)]=cookies[i].substring(equalIndex+1);//To prevent the value of  '='an error occurred
				}
				return cookieObj;
			}
			else if( value === undefined ){// if value is undefined, get the cookie value
				var cookiestring = "; " + window.document.cookie;
				var cookies = cookiestring.split( "; " + name + "=" );
				if ( cookies.length === 2 ){
					return cookies.pop().split( ";" ).shift();
				}
				return null;
			}
			else {
				// if value is a false boolean, we'll treat that as a delete
				if( value === false ){
					days = -1;
				}
				var expires;
				if ( days ) {
					var date = new Date();
					date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
					expires = "; expires="+date.toGMTString();
				}
				else {
					expires = "";
				}
				window.document.cookie = name + "=" + value + expires + "; path=/";
			}
	}

});
