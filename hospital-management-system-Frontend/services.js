app.factory('ApiService', function($http) {
    var baseUrl = 'http://localhost:5000/api';
    return {
        // User Authentication
        signup: function(user) {
            return $http.post(baseUrl + '/auth/signup', user);
        },
        login: function(user) {
            return $http.post(baseUrl + '/auth/login', user);
        },

        // Doctor Management
        getDoctors: function() {
            return $http.get(baseUrl + '/doctors/all');
        },
        addDoctor: function(doctor) {
            return $http.post(baseUrl + '/doctors/add', doctor);
        },
        updateDoctor: function(id, doctor) {
            return $http.put(baseUrl + '/doctors/update/' + id, doctor);
        },
        deleteDoctor: function(id) {
            return $http.delete(baseUrl + '/doctors/delete/' + id);
        },

        // Patient Records
        getPatients: function() {
            return $http.get(baseUrl + '/patients/all');
        },
        getPatientById: function(id) {
            return $http.get(baseUrl + '/patients/' + id);
        },
        addPatient: function(patient) {
            return $http.post(baseUrl + '/patients/add', patient);
        },
        updatePatient: function(id, patient) {
            return $http.put(baseUrl + '/patients/update/' + id, patient);
        },
        deletePatient: function(id) {
            return $http.delete(baseUrl + '/patients/delete/' + id);
        },

        // Appointments
        getAppointments: function() {
            return $http.get(baseUrl + '/appointments/all');
        },
        getAppointmentByPatient: function(id) {
            return $http.get(baseUrl + '/appointments/patient/' + id);
        },
        bookAppointment: function(appointment) {
            return $http.post(baseUrl + '/appointments/book', appointment);
        },
        updateAppointment: function(id, data) {
            return $http.put(baseUrl + '/appointments/update/' + id, data);
        },
        deleteAppointment: function(id) {
            return $http.delete(baseUrl + '/appointments/delete/' + id);
        },

        // Billing
        generateBill: function(bill) {
            return $http.post(baseUrl + '/billing/generate', bill);
        },
        getBills: function() {
            return $http.get(baseUrl + '/billing/all');
        },
        getBillByPatient: function(id) {
            return $http.get(baseUrl + '/billing/patient/' + id);
        },
        updateBill: function(id, data) {
            return $http.put(baseUrl + '/billing/update/' + id, data);
        },
        deleteBill: function(id) {
            return $http.delete(baseUrl + '/billing/delete/' + id);
        }
    };
});
