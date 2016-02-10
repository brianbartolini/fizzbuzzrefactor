
$(document).ready(function() {


var number = prompt("please input a maximum number");
var num1= parseInt(number);

var num2;

function evenNumberCalc() {
	var evenNumber = prompt("please input an even number");
	num2 = parseInt(evenNumber);
	while(num2 % 2 !=　0) {
	evenNumber = prompt("please input an even number");
	return num2 = parseInt(evenNumber);
	}
}

var num3;

function oddNumberCalc() {
	var oddNumber = prompt("please input an odd number");
	num3 = parseInt(oddNumber);
	while(num3 % 2 == 0){
		oddNumber = prompt("please input an odd number");
		return num3 = parseInt(oddNumber);
	}
}
	

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
evenNumberCalc();
oddNumberCalc();
fizzBuzz(num1, num2, num3);

});
