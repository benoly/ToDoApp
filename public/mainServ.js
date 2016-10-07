angular.module("toDoApp")
.service("mainServ", function($http){

  this.addItem = function(inputItem){
    return $http({
      method: "POST",
      url: "/todo",
      data: inputItem
    }).then(function(response){
      return response;
    })
  };

  this.getItems = function(){
    return $http({
      method: "GET",
      url: "/todo"
    }).then(function(response){
      return response;
    })
  };

  this.deleteItem = function(obj){
    return $http({
      method: "DELETE",
      url: "/todo/" + obj._id
    }).then(function(response){
      return response;
    })
  };

  // this.updateItem = function(obj){
  //   return $http({
  //     method: "PUSH",
  //     url: "/todo/" + obj._id
  //   }).then(function(response){
  //     return response;
  //   })
  // };

});
