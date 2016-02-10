
$(document).ready(function() {


var number = prompt("please input a maximum number");
var num1= parseInt(number);


// function evenNumber() {
	var evenNumber = prompt("please input an even number");
	num2 = parseInt(evenNumber);
	// return num2;	
	// };	

// function oddNumber() {
	var oddNumber = prompt("please input an odd number");
	num3 = parseInt(oddNumber);
	// return num3;	
	// };	


var fizzbuzzArray = [];

function fizzBuzz(num, evenNum, oddNum){
 
    for (var i = 1; i <= num; i++) {
		var val= i;
  	
		if (val % evenNum == 0 && val % oddNum == 0) {
			// fizzbuzzArray.push("fizz");
			$(".fizzbuzzoutput").append('<li>fizzbuzz</li>');
       	}
		
		else if (val % oddNum == 0 ) {
		 $(".fizzbuzzoutput").append('<li>fizz</li>');
		  // fizzbuzzArray.push("buzz");
		}
  
 		else if (val % evenNum == 0){
 		$(".fizzbuzzoutput").append('<li>buzz</li>');		
		  // fizzbuzzArray.push("fizzbuzz");
		}

		else {
		  $(".fizzbuzzoutput").append('<li>' + val + '</li>');
		  // fizzbuzzArray.push(val);
		}
    
}
  
}
// evenNumber();
// oddNumber();
fizzBuzz(num1, num2, num3);

});
