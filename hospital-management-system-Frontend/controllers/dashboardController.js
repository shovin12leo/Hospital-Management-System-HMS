app.controller('DashboardController', function($scope, $location, ApiService) {
    $scope.user = JSON.parse(localStorage.getItem('user')) || {};
    
    if (!$scope.user.email) {
        $location.path('/login'); // Redirect if not logged in
    }
    
    $scope.logout = function() {
        localStorage.removeItem('user');
        $location.path('/login');
    };
});