
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController',
             activetab: 'form'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html',
             activetab: 'profile'
        })
        
        .state('form.legal', {
            url: '/legal',
            templateUrl: 'form-legal.html',
             activetab: 'legal'
        })
        
        .state('form.basic', {
            url: '/payment',
            templateUrl: 'form-basic.html',
             activetab: 'basic'
        })

        .state('form.bar', {
            url: '/bar',
            templateUrl: 'form-bar.html',
             activetab: 'bar'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})
.directive('multiselectDropdown', [function() {
    return function(scope, element, attributes) {

        element = $(element[0]); // Get the element as a jQuery element

        // Below setup the dropdown:

        element.multiselect({
            option1: 123,
            option2: "abcd",
            option3: "affgbcd",
            option4: "abcfggd"
            // etc.
        })

        // Below maybe some additional setup
    }
}])
// our controller for the form
// =============================================================================
.controller('formController',function($scope,$state) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    $scope.curr="profile";
     $scope.courts = [{
      "name" : "Courts", "ac": 251, "a_number": "7933", "p_id": 33
    }];
    $state.go("form.profile")
    
    $scope.addFields = function (form) {
      if(typeof form.contacts === 'undefined') {
        form.contacts = [];
      }
      form.contacts.push({name:'', ac: '', a_number: '', p_id: '' });
    }
    
    $scope.submit = function(form){
      alert("Submitted, now view profile page");
    }
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    $scope.n2 = function(){
        if($scope.formData.name && $scope.formData.email && $scope.formData.cont)
        {
                $state.go("form.legal");
                $scope.curr="legal";
        }
    };
    $scope.n3 = function(){
        if($scope.formData.state && $scope.formData.addr)
        {
                $state.go("form.basic");
                $scope.curr="basic";
        }
    };
    $scope.n4 = function(){
        if($scope.formData.summ && $scope.formData.edu&& $scope.formData.hono&& $scope.formData.publ)
        {
                $state.go("form.bar");
                $scope.curr="bar";
        }
    };
    $scope.p1 = function(){
        if($scope.formData.name && $scope.formData.email)
        {
                $state.go("form.profile");
                $scope.curr="profile";
        }
    };
    $scope.p2 = function(){
        if($scope.formData.name && $scope.formData.email)
        {
                $state.go("form.legal");
                $scope.curr="legal";
        }
    };
    $scope.p3 = function(){
        if($scope.formData.name && $scope.formData.email)
        {
                $state.go("form.basic");
                $scope.curr="basic";
        }
    };
    $scope.submit = function(){
        alert("Successfully Submitted");
    };
});


angular.module('profApp', ['ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('about', {
            url: '/about',
            templateUrl: 'profile-about.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('review', {
            url: '/reviews',
            templateUrl: 'profile-review.html'
        })
        ;
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/about');
})

.controller('formController',function($scope,$state) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    $scope.n2 = function(){
        if($scope.formData.name && $scope.formData.email)
        {
                $state.go("form.legal");
        }
    };
});