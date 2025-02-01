app.controller('BillingController', function($scope, ApiService) {
    $scope.bills = [];
    $scope.newBill = {};
    $scope.errorMessage = '';

    // Fetch all bills
    $scope.getBills = function() {
        ApiService.getBills().then(function(response) {
            $scope.bills = response.data.billings;
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to fetch bills.';
        });
    };

    // Generate a new bill
    $scope.generateBill = function() {
        ApiService.generateBill($scope.newBill).then(function(response) {
            alert('Bill generated successfully!');
            $scope.newBill = {};
            $scope.getBills(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to generate bill.';
        });
    };

    // Delete a bill
    $scope.deleteBill = function(id) {
        ApiService.deleteBill(id).then(function(response) {
            alert('Bill deleted successfully!');
            $scope.getBills(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to delete bill.';
        });
    };

    $scope.getBills(); // Load bills on page load
});
