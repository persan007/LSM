﻿(function () {

    var NavigationController = function ($scope, Request) {

        var SearchFiler = function () {
            // TODO: Hitta all kurser, lärare mm  som matchar sökresultatet. (Akronym?)
            //console.log("Search term: " + $scope.SearchText);
        }

        var LogOut = function () {
            Request.Make("/Account/LogOff/").then(function (data) {
                console.log(data);
            });
        }

        Request.Make("/Home/GetUserInformation/").then(function (data) {
            $scope.User = data[0];
            $scope.User.Role = ((data[0].Role === "Teacher") ? true : false);
        });
        
        $scope.$watch("SearchText", SearchFiler);
        $scope.SearchText = "";
        $scope.LogOut = LogOut;
        $scope.User = null;
    }

    LMSApp.controller("NavigationController", [
        "$scope",
        "Request",
        NavigationController
    ]);

}());