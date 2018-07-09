var myApp=angular.module('myApp',['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('html',{
			name: 'html',
			url:'/html',
			templateUrl:'html.html'
		}).state('css',{
			name:'css',
			url:'/css',
			templateUrl:'css.html'
		}).state('js',{
			name:'js',
			url:'/js',
			templateUrl:'js.html'
		}).state('jquery',{
			name:'jquery',
			url:'/css',
			templateUrl:'jquery.html'
		}).state('angular',{
			name:'angular',
			url:'/angular',
			views:{
				'':{
					templateUrl:'angular.html',
					controller:function($state){
						$state.go('angular.formula')
					}
				}
			}
		}).state('angular.formula',{
			name:'angular.formula',
			url:'/formula',
			templateUrl:'formula.html'
		}).state('angular.command',{
			name:'angular.command',
			url:'/command',
			templateUrl:'command.html'
		}).state('angular.model',{
			name:'angular.model',
			url:'/model',
			templateUrl:'model.html'
		})
		$urlRouterProvider.otherwise('/html');
}]);

myApp.controller('myControl',  ['$scope', function ($scope)  {
	$scope.tab=[
    	{"link":"angular.formula","txt":"表达式"},
    	{"link":"angular.command","txt":"指令"},
    	{"link":"angular.model","txt":"模型"}
    ];
    $scope.tabS={
    	"tabA": 0
    };

    $scope.addActive = function (index) {
        $scope.tabS.tabA = index;
    };
    
}]);