



var url = 'https://fcm.googleapis.com/fcm/send';
var api_key = 'AAAABzxvKIU:APA91bERVJI2elUOUATAZmLvMkQrhfDAYdvT8T2mhVxf7zFHlZ5l_iO0eJm7K_Av7GsQXjJEwzdFnuYdJRz67HdV8QKHFk3EghRTE57dzp-T76eY7nWqdTCvJid3v2qDUpIIkqo7KhFW';
var body = document.querySelector("#tex");
var title = document.querySelector("#tit");
var icon = 'https://webapp.eletronica.tech/img/icon-128x128.png';  
var xhr = new XMLHttpRequest();






function sendC(){
	var tokenC  = 'da-GzsgulIY:APA91bEB5oVuAtjOxGb3TPJWNwetKCte6HUF9MtLd-h1_viBHbyhTJbpL5sRzKsifSSA6GsOy8L3XqgdcuByecCSRpHG7mX-_1CQnSIRY-GBGwJZ-3YDD1OVU3oVdztkZHfY9dQKsZTB';
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(this.responseText));
	}
};
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.setRequestHeader('Authorization', 'key='+ api_key)
xhr.send('{"to":"'+tokenC+'","notification":{"title":"'+title.value+'","body":"'+body.value+'","icon":"'+icon+'"}}');
}

function sendS(){
	var tokenS  = 'dLhVHgMcvDo:APA91bHWrC-V1MkfYrw2kr_4PdD6nacVmzHps9UiZJxPw4iXAwmHmvSkVFhwLB5f-sB3t1f5ERg__WrMQYQmOv6mu46atiQRygTZm2xxeu5aep2cQ3NKpw3Kgq0UeyOy_CqUOtgWBGEh';
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(this.responseText));
	}
};
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.setRequestHeader('Authorization', 'key='+ api_key)
xhr.send('{"to":"'+tokenS+'","notification":{"title":"'+title.value+'","body":"'+body.value+'","icon":"'+icon+'"}}');
}

function sendX(){
	var tokenX  = 'fgMp21A-XNw:APA91bFiFeJT_ULmnFJ0dKrys9pvQZn0As_jQIxjjdMPAu6mLjVL_2WNkHDR9Wk7K8ehofITD21Rdm4SENC0PISg9HYilakv34Hi2XaqIqS2xPx-gbf_e1e_f0dXSehPpEgtodZCvD61';
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(this.responseText));
	}
};
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.setRequestHeader('Authorization', 'key='+ api_key)
xhr.send('{"to":"'+tokenX+'","notification":{"title":"'+title.value+'","body":"'+body.value+'","icon":"'+icon+'"}}');
}
