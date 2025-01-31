app.controller('SignupController', function($scope, $location, ApiService) {
    $scope.newUser = {};
    $scope.errorMessage = '';

    $scope.signup = function() {
        ApiService.signup($scope.newUser).then(function(response) {
            if (response.data.success) {
                alert('Signup successful! Please login.');
                $location.path('/login');
            } else {
                $scope.errorMessage = response.data.message;
            }
        }).catch(function(error) {
            $scope.errorMessage = 'Signup failed. Try again.';
        });
    };
});
