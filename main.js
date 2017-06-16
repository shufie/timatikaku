function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var correct =0;

		if (question1 == "LXXIX") {
			correct++;
		}

		if (question2 == "XXLVII") {
			correct++;
		}

		if (question3 == "XCIV") {
			correct++;
		}

		if (question4 == "XLV dan LIV") {
			correct++;
		}

		if (question5 == "XXV dan XIV") {
			correct++;
		}

		if (question6 == "XXXVI, XXVII, XLIII") {
			correct++;
		}

		if (question7 == "MCMXLII") {
			correct++;
		}

		if (question8 == "MCMXLIX") {
			correct++;
		}
		
		if (question9 == "MCMXLV") {
			correct++;
		}

		if (question10 == "MMX") {
			correct++;
		}

		if (question11 == "LI") {
			correct++;
		}

		if (question12 == "74") {
			correct++;
		}
		
		if (question13 == "1950") {
			correct++;
		}

		if (question14 == "709") {
			correct++;
		}

		if (question15 == "19 + 43 = 62") {
			correct++;
		}

		

var messages = ["Ajaib! Kerja bagus!", "Okelah boleh", "Belajar lagi yahh"];
var pictures = ["IMG/wow.gif", "IMG/hebat.gif", "IMG/astaga.gif"];
var range;
	if (correct < 6) {
		range = 2;
	}

	if (correct > 5 && correct < 11) {
		range = 1;
	}

	if (correct > 10) {
		range = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";



	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "Kamu dapat " + correct + " nilai benar.";
	document.getElementById("picture").src = pictures[range];
}
