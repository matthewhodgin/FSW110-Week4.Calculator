function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = num1 / num2;
}

function additionBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = Number(num1)+ Number(num2);
}

function subtractionBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = num1 - num2;
}

function stylecolor() 
{
        document.getElementById("firstNumber").style.backgroundColor = "hotpink";
        document.getElementById("result").style.backgroundColor = "forestgreen";
        document.getElementById("secondNumber").style.backgroundColor = "lightblue"; 
        document.body.style.backgroundColor = "coral";
        document.getElementById("header").style.fontSize = "50px";
        document.getElementById("header").style.fontWeight = "bold";
}

stylecolor()




