angular.module('<%= _.camelize(appname) %>', ['ui.bootstrap','<%= routerModuleName %>','ngAnimate']);
<% if (!uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($routeProvider, $locationProvider, $urlMatcherFactoryProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false); //remove debugging info (better speed, dom)

    // HTML 5 mode
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');

    //allow trailing slash in url's:
    $urlMatcherFactoryProvider.strictMode(false);


    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});
<% } %><% if (uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $compileProvider) {
    
    $compileProvider.debugInfoEnabled(false); //remove debugging info (better speed, dom)

    // HTML 5 mode
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');

    //allow trailing slash in url's:
    $urlMatcherFactoryProvider.strictMode(false);


    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});
<% } %>
angular.module('<%= _.camelize(appname) %>').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
