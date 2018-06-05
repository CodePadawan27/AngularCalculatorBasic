var calculator = angular.module('angularCalculator', ['ui.bootstrap'])
    .controller('calculatorCtrl', function ($scope) {

        //Suorittaa yhteenlaskun annetuille luvuille
        $scope.doTheAdd = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Virheellinen syöttö")
                }
                else {
                    $scope.result = firstInput + secondInput
                }
            }
            catch (e) {
                $scope.result = e.message;
            }
        };

        //Suorittaa vähennyslaskun annetuille luvuille
        $scope.doTheSubstract = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Virheellinen syöttö")
                }
                else {
                    $scope.result = firstInput - secondInput
                }
            }
            catch (e) {
                $scope.result = e.message;
            }
        };
        //Suorittaa kertolaskun syötetyille luvuille
        $scope.doTheMultiply = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Virheellinen syöttö")
                }
                else {
                    $scope.result = firstInput * secondInput
                }
            }
            catch (e) {
                $scope.result = e.message;
            }
        };
        //Suorittaa jakolaskun syötetyille luvuille
        $scope.doTheDivide = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Virheellinen syöttö")
                }
                else if (secondInput === 0) {
                    throw new Error("Nollalla ei voi jakaa")
                }
                else {
                    $scope.result = firstInput / secondInput
                }
            }
            catch (e) {
                $scope.result = e.message;
            }
        };
        //Suorittaa potenssilaskun syötetyille luvuille
        $scope.doThePow = function () {
            try {
                var firstInput = Number($scope.firstNumber);
                var secondInput = Number($scope.secondNumber);
                if (isNaN(firstInput) || isNaN(secondInput)) {
                    throw new Error("Virheellinen syöttö")
                }
                else {
                    $scope.result = Math.pow(firstInput, secondInput)
                }
            }
            catch (e) {
                $scope.result = e.message;
            }
        };

        //Tyhjentää tekstikentät ja tuloksen ruudulta
        $scope.clear = function () {
            $scope.firstNumber = undefined;
            $scope.secondNumber = undefined;
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