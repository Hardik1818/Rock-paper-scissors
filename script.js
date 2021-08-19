function rpsGame(yourchoice){
    console.log(yourchoice);
    
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
    console.log('human Choice:',humanchoice);
    
    botchoice=numberToChoice(randToRpsInt());
    console.log('computer choice:', botchoice);
    
    results = decidewinner(humanchoice, botchoice);
    console.log(results);
    
    message = finalmessage(results)
    console.log(message);
    
    rpsFrontEnd(yourchoice.id, botchoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3); 
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decidewinner(yourchoice, computerchoice){
    var rpsdatabase ={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1}
    };
    var yourScore = rpsdatabase[yourchoice][computerchoice];
    var computerScore = rpsdatabase[computerchoice][yourchoice];
    
    return [yourScore,computerScore];
}
function finalmessage([yourScore,computerScore]){
    if (yourScore ===0){
        return {'message':'You Lost!','color':'red'};
    }else if (yourScore ===0.5){
        return {'message':'You Tied!','color':'yellow'};
    }else{
        return {'message':'You won!','color':'green'};
    }
}

function rpsFrontEnd(humanImagechoice,botImagechoice,finalmessage){
    var imagesDatabase = {
        'rock': 'Image/r.png',
        'paper': 'Image/p.png',
        'scissors':'Image/s.jpg'
    }
    //remove all element
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" +imagesDatabase[humanImagechoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,223,1);'>"
    messageDiv.innerHTML="<h1 style='color: >"+ finalmessage['color'] +";font-size:60px ; padding:30px;'>"+ finalmessage['message']+ "</h1>"
    botDiv.innerHTML = "<img src='" +imagesDatabase[botImagechoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
