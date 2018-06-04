var calculator = angular.module('angularCalculator', ['ui.bootstrap'])
    .controller('calculatorCtrl', function ($scope) {

        //Suorittaa yhteenlaskun annetuille luvuille
        $scope.doTheAdd = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Not a number")
                }
                else {
                    $scope.result = firstInput + secondInput
                }
            }
            catch (e) {
                $scope.result = "Virheellinen syöttö";
            }
        };

        //Suorittaa vähennyslaskun annetuille luvuille
        $scope.doTheSubstract = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Not a number")
                }
                else {
                    $scope.result = firstInput - secondInput
                }
            }
            catch (e) {
                $scope.result = "Virheellinen syöttö";
            }
        };
        //Suorittaa kertolaskun syötetyille luvuille
        $scope.doTheMultiply = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Not a number")
                }
                else {
                    $scope.result = firstInput * secondInput
                }
            }
            catch (e) {
                $scope.result = "Virheellinen syöttö";
            }
        };
        //Suorittaa jakolaskun syötetyille luvuille
        $scope.doTheDivide = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Not a number")
                }
                else {
                    $scope.result = firstInput / secondInput
                }
            }
            catch (e) {
                $scope.result = "Virheellinen syöttö";
            }
        };

        //Tyhjentää tekstikentät ja tuloksen ruudulta
        $scope.clear = function () {
            $scope.firstNumber = '';
            $scope.secondNumber = '';
            $scope.result = '';
            //window.location.reload();
        };

        //Estää muiden kuin numeroiden syöttämisen tekstikenttiin, TODO
        $scope.filterValue = function ($event) {
            if (isNaN(String.fromCharCode($event.keyCode))) {
                $event.preventDefault();
            }
        };
    });