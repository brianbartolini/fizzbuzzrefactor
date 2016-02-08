
$(document).ready(function() {

var number = prompt("please input a number");
var num1= parseInt(number);


var fizzbuzzArray = [];

function fizzBuzz(x, y){
 
    for (var i = 1; i <= 100; i++) {
		var val= i;
  	
		if (val % y === 0 && val % 5 !== 0) {
			// fizzbuzzArray.push("fizz");
			$(".fizzbuzzoutput").append('<li>fizz</li>');
       	}
		
		else if (val % 5 === 0 && val % y !== 0) {
		 $(".fizzbuzzoutput").append('<li>buzz</li>');
		  // fizzbuzzArray.push("buzz");
		}
  
 		else if (val % y === 0 && val % 5 === 0){
 		$(".fizzbuzzoutput").append('<li>fizzbuzz</li>');		
		  // fizzbuzzArray.push("fizzbuzz");
		}

		else {
		  $(".fizzbuzzoutput").append('<li>' + val + '</li>');
		  // fizzbuzzArray.push(val);
		}
    
}
  
}
fizzBuzz(number, num1);

});
