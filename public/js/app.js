// angular application

var rantedApp = angular.module('rantedApp', []);

rantedApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http){

	// $http.get('/messages').success(function(response){
	// 	console.log("recieved the data requested");
	// 	$scope.messages = response;
	// })
	 $scope.messages = [
	ranter1 = {
		username: "theRanter",
		rant: "I soooo hate traffic",
		thumbs: 0
	},

	ranter2 = {
		username: "hater",
		rant: "I cant stand people that rant lol",
		thumbs: 3
	},

	ranter3 = {
		username: "whyRant",
		rant: "Can't stand when my neighbors dog barks while I am asleep, I got to work in the morning",
		thumbs: 1
	}
	];
	  
	  $scope.addPost = function(){
    	if($scope.rantmsg === '') { return; }
      	$scope.messages.push({
      		username: "anon",
      		rant: $scope.rantmsg,
      		thumbs: 0
    	});
    	$scope.rantmsg = '';
    
  };
		console.log($scope.aRant);
	
	

	
}
]);
