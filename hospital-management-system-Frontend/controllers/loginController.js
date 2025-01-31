app.controller('LoginController', function($scope, $location, ApiService) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.login = function() {
        ApiService.login($scope.user).then(function(response) {
            if (response.data.success) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                $location.path('/dashboard');
            } else {
                $scope.errorMessage = response.data.message;
            }
        }).catch(function(error) {
            $scope.errorMessage = 'Login failed. Please check your credentials.';
        });
    };
});
