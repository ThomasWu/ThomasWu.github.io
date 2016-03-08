angular.module('todoApp', [])
  .controller('CountDownController', function() {
    var cd = this;
    cd.time = 5;
    
    countdown = function($scope, $timeout) {
        if (cd.time<0) {
            cd.time = 0;
            return;
        }
        cd.time--;
        $timeout(countdown, 1000);
    }
    
    countdown()
})