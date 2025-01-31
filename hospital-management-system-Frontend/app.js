var app = angular.module('hmsApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupController'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/doctors', {
            templateUrl: 'views/doctors.html',
            controller: 'DoctorsController'
        })
        .when('/patients', {
            templateUrl: 'views/patients.html',
            controller: 'PatientsController'
        })
        .when('/appointments', {
            templateUrl: 'views/appointments.html',
            controller: 'AppointmentsController'
        })
        .when('/billing', {
            templateUrl: 'views/billing.html',
            controller: 'BillingController'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
