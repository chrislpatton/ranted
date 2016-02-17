// angular application

var rantedApp = angular.module('rantedApp', []);

rantedApp.factory('messages', [function(){
  var msg = {
    
        messages :[
	ranter1 = {
		username: "anon",
		rant: "I soooo hate traffic",
		thumbs: 15,
		comments:"ME TOOO!"
	},

	ranter2 = {
		username: "anon",
		rant: "I cant stand people that rant lol",
		thumbs: 3,
		comments: ""
	},

	ranter3 = {
		username: "anon",
		rant: "Can't stand when my neighbors dog barks while I am asleep, I got to work in the morning",
		thumbs: 1,
		comments: ""
	}
	]
  };
  return msg;
}])


        // rantedApp.controller('CommentCtrl',['$scope', function ($scope) {
        //     //This will hide the DIV by default.
        //     $scope.IsVisible = false;
        //     $scope.ShowHide = function () {
        //         //If DIV is visible it will be hidden and vice versa.
        //         $scope.IsVisible = $scope.IsVisible ? false : true;
        //    }
        //    ]);

              

rantedApp.controller('AppCtrl', ['$scope', '$http','messages',
function($scope, $http, messages){

	// $http.get('/messages').success(function(response){
	// 	console.log("recieved the data requested");
	// 	$scope.messages = response;
	// })
	 $scope.messages = messages.messages;
	  
	  $scope.addPost = function(){
    	if($scope.rantmsg === '') { return; }
      	$scope.messages.push({
      		username: "anon",
      		rant: $scope.rantmsg,
      		thumbs: 0
    	});
    	$scope.rantmsg = '';
    
  };
		$scope.addVote = function(message) {
    	message.thumbs += 1;
  		};
	
	$scope.IsVisible = false;
	$scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
    $scope.IsVisible = $scope.IsVisible ? false : true;
     };

	
}
]);


