
(function(){
angular.module('cal',[])

.controller('cal', ['$scope',function($scope) {
$scope.output = "";
$scope.opeartion = "";
$scope.list_of_calculations = [];
$scope.list_of_10_calculations = [];
$scope.list_of_10_calculations = JSON.parse(localStorage.getItem('list_of_10_calculations') || '[]');
$scope.alertmodalfade ='';
$scope.alertmodal ='none';
$scope.validate =0;
$scope.resultprinted = 0;

$scope.input = function(input) {

if(input === 'clear'){
if($scope.output.length == 0)
return;
else {$scope.output = ''; $scope.validate=0; $scope.resultprinted=0;}
}

else if(input == 'save'){
if($scope.output.length == 0)
return;

$scope.list_of_calculations.push($scope.output);
if($scope.list_of_calculations.length>10){
$scope.list_of_10_calculations = $scope.list_of_calculations.slice(-10);
}
else {$scope.list_of_10_calculations = $scope.list_of_calculations;}
localStorage.setItem('list_of_10_calculations',  JSON.stringify($scope.list_of_10_calculations));
$scope.output = '';
$scope.validate=0;
$scope.resultprinted=0;
}



else if(input == 'sqrt'){	
  if($scope.validate==1) { alertopen();}
  else if(isNaN(Math.sqrt($scope.output))){  
  alertopen();
  }
  else if($scope.output == ''){
  $scope.output = "square root of 0" + $scope.output + " = " +Math.sqrt($scope.output);
  $scope.validate = 1;
  }
  else{
  $scope.output = "square root of " + $scope.output + " = " +Math.sqrt($scope.output);
  $scope.validate = 1;
  }
}
  
else if (input === 'eval'){
  if($scope.output.length == 0){
  return;
  }
  else{
  if($scope.output.indexOf("square root") != -1)
  return;
  var value =  Math.round(evil($scope.output)*10000)/10000;
  $scope.output = $scope.operation.concat(value);
  $scope.resultprinted = 1;
  }
}
  
  else{
    if($scope.validate==1 || $scope.resultprinted==1) { alertopen();}
    else
    $scope.output += input;
  }
    

    
}

function evil(fn) {
	$scope.operation = fn+" = ";
  return new Function('return ' + fn)();
}

function alertopen(){
  $scope.alertmodalfade ='in'; $scope.alertmodal='block';
}

$scope.alertclose = function(){
 $scope.alertmodalfade =''; $scope.alertmodal='none';
 $scope.validate =1;
}



}])

})();