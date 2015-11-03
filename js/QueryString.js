
define(function(){
	function queryString(url) {
		var result = {};
		url=url||document.URL;
		url = url.split("?")[1];
		var map =url&&url.split("&");
		if(map)
		{
			for(var i = 0, len = map.length; i < len; i++) {
				result[map[i].split("=")[0]] = map[i].split("=")[1];
			}
		}
		return result;
	}

    



});
