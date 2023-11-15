function checkAnswers (){
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.password.value;
    if (answer1 == "8"){
        score = score +1 ;
    }
    else {
        score = score+0;}

    let answer2 = quiz.threat.value;
    if (answer2 == "MWRattack"){
        score = score +1 ;
    }
    else {
        score = score+0;}
   
    let answer3 = quiz.cyber.value;
        if (answer3 == "firewall"){
            score = score +1 ;
        }
        else {
            score = score+0;}

    
    let answer4 = quiz.malware.value;
            if (answer4 == "maliciousSoftware"){
                score = score +1 ;
            }
            else {
                score = score+0;}

    if (score == 4) {         
    alert ("You're a genius!");
    }
    else{
        alert("try again :(")
    }

}