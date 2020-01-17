
var d = new Date();
var startTime = d.getTime();

var clicks = 0;
var ratio = 0.00001;

function clickCounter(event) {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } 
      else {
        sessionStorage.clickcount = 1;
      }
      clicks = sessionStorage.clickcount;
      var d1 = new Date();
      var curr = d1.getTime();
      if(curr>startTime){
          ratio = 10000*clicks/(curr-startTime);
      }
      console.log(ratio);
      // Score to Fetch: ratio
      
    } 
    else {
      clicks = 1;
    }
}
document.addEventListener("click", clickCounter);
