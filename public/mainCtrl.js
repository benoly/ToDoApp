angular.module("toDoApp")
.controller("mainCtrl", function($scope, mainServ){

  $scope.addItem = function(inputItem){
    mainServ.addItem(inputItem)
    .then(function(response){
      $scope.getItems();
      // console.log(response);
      });
    };

  $scope.getItems=function(){
  mainServ.getItems()
  .then(function(response){
    $scope.allItems=response.data;
    // console.log($scope.allItems);
    });
  };

  $scope.getItems();

  $scope.deleteItem=function(obj) {
    mainServ.deleteItem(obj)
    .then(function(response){
      $scope.getItems();
      // console.log(response);
    });
  };

  // $scope.updateItem=function(obj) {
  //   mainServ.updateItem(obj)
  //   .then(function(response){
  //     $scope.getItems();
  //   });
  // };

});
