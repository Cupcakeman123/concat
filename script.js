var par1_input1 = "";
var par1_input2 = "";
var par1_input3 = "";
var par1_input4 = "";
var par1_input5 = "";
var par1_input6 = "";

var par2_input1 = "";
var par2_input2 = "";
var par2_input3 = "";
var par2_input4 = "";
var par2_input5 = "";
var par2_input6 = "";

function getparagraph1() 
{
    var input = [];
    for(var i = 1; 1 <= 6; i++)
    {
        inputs.push(document.getElementById("par1_input" + i).value);
    }
    document.getElementById("paragraph1").innerHTML = paragraph1;
    console.log(paragraph1);
}

function getparagraph2() 
{
    par2_input1 = document.getElementById("par2_input_1").innerHTML;
    console.log(par2_input1);

    par2_input2 = document.getElementById("par2_input_2").innerHTML;
    console.log(par2_input2);
    
    par2_input3 = document.getElementById("par2_input_3").innerHTML;
    console.log(par2_input3);

    par2_input4 = document.getElementById("par2_input_4").innerHTML;
    console.log(par2_input4);

    par2_input5 = document.getElementById("par2_input_5").innerHTML;
    console.log(par2_input5);

    par2_input6 = document.getElementById("par2_input_6").innerHTML;
    console.log(par2_input6);

    var paragraph2 = par2_input1.concat(par2_input2.concat(par2_input3.concat(par2_input4.concat(par2_input5.concat(par2_input6)))));
    document.getElementById("paragraph2").innerHTML = paragraph1;
    console.log(paragraph2);
}