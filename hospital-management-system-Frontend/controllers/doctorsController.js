app.controller('DoctorsController', function($scope, ApiService) {
    $scope.doctors = [];
    $scope.newDoctor = {};
    $scope.errorMessage = '';

    // Fetch all doctors
    $scope.getDoctors = function() {
        ApiService.getDoctors().then(function(response) {
            $scope.doctors = response.data.doctors;
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to fetch doctors.';
        });
    };

    // Add a new doctor
    $scope.addDoctor = function() {
        ApiService.addDoctor($scope.newDoctor).then(function(response) {
            alert('Doctor added successfully!');
            $scope.newDoctor = {};
            $scope.getDoctors(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to add doctor.';
        });
    };

    // Delete a doctor
    $scope.deleteDoctor = function(id) {
        ApiService.deleteDoctor(id).then(function(response) {
            alert('Doctor deleted successfully!');
            $scope.getDoctors(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to delete doctor.';
        });
    };

    $scope.getDoctors(); // Load doctors on page load
});
