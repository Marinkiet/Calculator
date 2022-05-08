$(document).ready(function(){               //once html dom has loaded
    $('#one').click(function(){             //on click of each number button display/append value in the input area
        document.forms.display.value +=1;
    });
    $('#two').click(function(){
        document.forms.display.value +=2;
    });
    $('#three').click(function(){
        document.forms.display.value +=3;
    });
    $('#four').click(function(){
        document.forms.display.value +=4;
    });
    $('#five').click(function(){
        document.forms.display.value +=5;
    });
    $('#six').click(function(){
        document.forms.display.value +=6;
    });
    $('#seven').click(function(){
        document.forms.display.value +=7;
    });
    $('#eight').click(function(){
        document.forms.display.value +=8;
    });
    $('#nine').click(function(){
        document.forms.display.value +=9;
    });
    $('#zero').click(function(){
        document.forms.display.value +=0;
    });
    $('#dot').click(function(){
        document.forms.display.value +='.';
    });
    $('#add').click(function(){
        document.forms.display.value +='+';
    });
    $('#multiply').click(function(){
        document.forms.display.value +='*';
    });
    $('#subtract').click(function(){
        document.forms.display.value +='-';
    });
    $('#divide').click(function(){
        document.forms.display.value +='/';
    });
    $('#equals').click(function(){                                                      //on click of equals btn then...
        if(display.value ==""){                                                         //check if no number was clicked
            document.getElementById('mssg').textContent = 'Enter values to calculate';  //display <- mssg
        }else{
            document.getElementById('mssg').textContent = "";     //display no "error" mssg
            document.forms.display.value =                        //from the values in the input field
            eval(document.forms.display.value);                   //evaluate/calculate them and display answer in field
        }
    });
    $('#clear').click(function(){            //on click 'C' btn then
        document.forms.display.value ="";    //clear input field
    });

})