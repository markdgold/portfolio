angular.module('PortfolioCtrls', [])

.controller('SlideCtrl', ['$scope', function($scope){
	console.log('in contactctrl')
	$(document).ready(function(){
		$('main').addClass('animated fadeIn');
	});
}]);
