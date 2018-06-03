var calculator = angular.module('angularCalculator', ['ui.bootstrap'])
    .controller('calculatorCtrl', function ($scope) {

        //Tarkistaa, onko annetut luvut numeroita ja palauttaa sen mukaan tosi/epätosi
        function validate(first, second) {
            if (isNaN(first) || isNaN(second)) {
                return false;
            }
            else {
                return true;
            }
        }

        //Suorittaa yhteenlaskun annetuille luvuille
        $scope.doTheAdd = function () {
            var firstInput = Number($scope.firstNumber);
            var secondInput = Number($scope.secondNumber);

            if (!validate(firstInput, secondInput)) {
                $scope.result = 'Virheellinen syöttö';
            }
            else {
                $scope.result = firstInput + secondInput
            }
        };

        //Suorittaa vähennyslaskun annetuille luvuille
        $scope.doTheSubstract = function () {
            var firstInput = Number($scope.firstNumber);
            var secondInput = Number($scope.secondNumber);

            if (!validate(firstInput, secondInput)) {
                $scope.result = 'Virheellinen syöttö';
            }
            else {
                $scope.result = firstInput - secondInput
            }
        };
        //Suorittaa kertolaskun syötetyille luvuille
        $scope.doTheMultiply = function () {
            var firstInput = Number($scope.firstNumber);
            var secondInput = Number($scope.secondNumber);

            if (!validate(firstInput, secondInput)) {
                $scope.result = 'Virheellinen syöttö';
            }
            else {
                $scope.result = firstInput * secondInput
            }
        };
        //Suorittaa jakolaskun syötetyille luvuille
        $scope.doTheDivide = function () {
            var firstInput = Number($scope.firstNumber);
            var secondInput = Number($scope.secondNumber);

            if (!validate(firstInput, secondInput)) {
                $scope.result = 'Virheellinen syöttö';
            }
            else {
                $scope.result = firstInput / secondInput
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