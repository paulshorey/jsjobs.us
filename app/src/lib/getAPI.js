export const getAPIHostname = function(){
    if (typeof window === "undefined") {
		console.log('getAPIHostname => http://localhost:1080');
		return "http://localhost:1080";
	} else {
		if (window.location.hostname==="localhost") {
			console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname+":1080");
			return window.location.protocol+"//"+window.location.hostname+":1080";
		} else {
			console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname);
			return window.location.protocol+"//"+window.location.hostname;
		}
	}
};
