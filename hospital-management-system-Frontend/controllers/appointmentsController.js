app.controller('AppointmentsController', function($scope, ApiService) {
    $scope.appointments = [];
    $scope.newAppointment = {};
    $scope.errorMessage = '';

    // Fetch all appointments
    $scope.getAppointments = function() {
        ApiService.getAppointments().then(function(response) {
            $scope.appointments = response.data.appointments;
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to fetch appointments.';
        });
    };

    // Book a new appointment
    $scope.bookAppointment = function() {
        ApiService.bookAppointment($scope.newAppointment).then(function(response) {
            alert('Appointment booked successfully!');
            $scope.newAppointment = {};
            $scope.getAppointments(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to book appointment.';
        });
    };

    // Delete an appointment
    $scope.deleteAppointment = function(id) {
        ApiService.deleteAppointment(id).then(function(response) {
            alert('Appointment deleted successfully!');
            $scope.getAppointments(); // Refresh list
        }).catch(function(error) {
            $scope.errorMessage = 'Failed to delete appointment.';
        });
    };

    $scope.getAppointments(); // Load appointments on page load
});
