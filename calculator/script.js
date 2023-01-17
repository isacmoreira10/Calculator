function deleted(){
    var output = document.querySelector( '#output' ).innerHTML;
    document.querySelector( '#output' ).innerHTML = output.substring(0, output.length -1 );
}


function show(number){
    var n1 = document.querySelector( '#output' ).innerHTML;
             document.querySelector( '#output' ).innerHTML = n1 + number;    
}

function clean(){
    document.querySelector( '#output' ).innerHTML = '';
}

function calculator(){
    var output = document.querySelector( '#output' ).innerHTML;
    document.querySelector( '#output' ).innerHTML = eval(output);
   
}