app.controller('PatientsController', function($scope, ApiService) {
    $scope.patients = [];
    $scope.newPatient = {};
    $scope.errorMessage = '';

    // Fetch all patients
    $scope.getPatients = function() {
        ApiService.getPatients().then(function(response) {
            $scope.patients = response.data.patients;
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to fetch patients.';
        });
    };

    // Add a new patient
    $scope.addPatient = function() {
        ApiService.addPatient($scope.newPatient).then(function(response) {
            alert('Patient added successfully!');
            $scope.newPatient = {};
            $scope.getPatients(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to add patient.';
        });
    };

    // Delete a patient
    $scope.deletePatient = function(id) {
        ApiService.deletePatient(id).then(function(response) {
            alert('Patient deleted successfully!');
            $scope.getPatients(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to delete patient.';
        });
    };

    $scope.getPatients(); // Load patients on page load
});
