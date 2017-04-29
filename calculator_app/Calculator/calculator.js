
(function(){
angular.module('cal',[])

.controller('cal', ['$scope',function($scope) {
$scope.output = "";
$scope.opeartion = "";
$scope.list_of_calculations = [];
$scope.list_of_10_calculations = [];
$scope.list_of_10_calculations = JSON.parse(localStorage.getItem('list_of_10_calculations') || '[]');

$scope.input = function(input) {
  if (input === 'clear'){
  	if($scope.output.length == 0)
  		return;

    else $scope.output = '';

    }

  else if(input == 'save'){
      if($scope.output.length == 0)
      return;

    $scope.list_of_calculations.push($scope.output);
    if($scope.list_of_calculations.length>10){
             $scope.list_of_10_calculations = $scope.list_of_calculations.slice(-10);
           }
    else{
    $scope.list_of_10_calculations = $scope.list_of_calculations;
      }
    localStorage.setItem('list_of_10_calculations',  JSON.stringify($scope.list_of_10_calculations));
    $scope.output = '';
    }



  else if(input == 'sqrt'){	
  	$scope.output = "square root of " + $scope.output + " = " +Math.sqrt($scope.output);

  }
  
  else if (input === 'eval'){
  	if($scope.output.length == 0){
  		return;
  	}
  	else{
    var value =  Math.round(evil($scope.output)*10000)/10000;
    $scope.output = $scope.operation.concat(value);
		}
	}
  
  else
    $scope.output += input;

    
}

function evil(fn) {
	$scope.operation = fn+" = ";
  return new Function('return ' + fn)();
}



}])

})();