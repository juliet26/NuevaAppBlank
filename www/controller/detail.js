angular.module('starter').controller('detailController', function($state){
	var vm = this;
	var personajesName = $state.params.personaje;
	switch (personajesName){
	case 'El chavo':
	vm.detalle = {
		nombre: 'El chavo',
		edad: '8',
		vivienda: 'La vecindad',
		fotoUrl: 'img/chavo.jpg',
		resumen: 'El Chavo del 8 es una serie de televisión cómica mexicana creada y protagonizada por Roberto Gómez Bolaños, producida por Televisión Independiente de México. Fue emitida por primera vez el 20 de junio de 1971 por Canal 8.'
	};
	}
	//boton anterior
	vm.goBack = function(){
	$state.go('lista');
	}
});
