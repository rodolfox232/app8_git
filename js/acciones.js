// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Delizó a la izquierda",function(){"aplicación7","Aceptar"});
		});	//cierre de la izquierda
		$('#derecha').on("swiperight",function(){	
		navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
			switch(opt)
			{
			  case 1:
			  navigator.notification.beep(2);
			  break;
			    
			  case 2:
			  navigator.notification.vibrate(1000);
			  break;
			}
		},"Aplication7","Beepear,Vibrar,Cancelar");
	});//cierre del deslizar derecha
	},false);//Cierre del deviceready
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		});//cierre del tap del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);//se mide en milisegundos
		});//cierre del tap de vibrar
	},false);//cierre del Listener
	document.addEventListener("deviceready", function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria ('la app se pausó');
		},false);//pause
		document.addEventListener("resume", function(){
			escribehistoria ('la app se reinició');
		},false); //resume
		document.addEventListener("online", function() {
			escribehistoria('la app se conectó a la red');
		},false);//se conecto
		document.addEventListener("offline", function() {
			escribehistoria('la app se desconectó de la red');
		},false);//se desconecto
		
		
	},false); //ready device
	
});//cierre del document principal
function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
