function CountDown($scope, $timeout) {
      var time = 10;
      countDowner = function() {
        if (time < 0) {
          $("#warning").fadeOut(2000);
          time = 0;
          return; // quit
        } else { // update scope
          countDown--; // -1
          $timeout(countDowner, 1000); // loop it again
        }
      };
      countDowner()
}