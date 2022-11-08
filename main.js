var lastResult = []
var calculatorNums = [];
var Num =[];

var numberOfButtons = document.querySelectorAll('.item').length;
for (var allBtn = 0; allBtn < numberOfButtons; allBtn++ ) 

document.querySelectorAll('.item')[allBtn].addEventListener("click",allCalBtn)

function allCalBtn(){
var buttonInnerHTML = this.id;
switch (buttonInnerHTML){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
        console.log(buttonInnerHTML)
        calculatorNums.push(buttonInnerHTML)
        document.getElementById("result").innerHTML = calculatorNums.join('');
        break;
    case 'point':
        console.log('.')
        calculatorNums.push('.')
        document.getElementById("result").innerHTML = calculatorNums.join('');
        break;
    case 'percent':
        console.log('%')
        calculatorNums.push('/100')
        Num.push(calculatorNums.join(''))
        console.log('hit equal: '+ eval(Num.join(' ')))
        calculatorNums.length=0
        lastResult.push(eval(Num.join(' ')))
        Num.length=0
        Num.push(lastResult)
        document.getElementById("result").innerHTML = eval(Num.join(' '));
        break;
    case '+':
    case '*':
    case '/':
    case '-':
        console.log(buttonInnerHTML)
        var temp = calculatorNums.join('')
        Num.push(temp)
        Num.push(buttonInnerHTML)
        calculatorNums.length=0
        break;
    case 'equal':
        console.log('=')
        Num.push(calculatorNums.join(''))
        console.log('hit equal: '+ eval(Num.join(' ')))
        calculatorNums.length=0
        lastResult.push(eval(Num.join(' ')))
        Num.length=0
        Num.push(lastResult)
        document.getElementById("result").innerHTML = eval(Num.join(' '));
        break;
    case 'ac':
        console.log('ac')
        calculatorNums.length = 0
        Num.length = 0
        document.getElementById("result").innerHTML ="0";
        break;
}
};





    // case '2':
    //     console.log('2')
    //     calculatorNums.push(2)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '3':
    //     console.log('3')
    //     calculatorNums.push(3)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '4':
    //     console.log('4')
    //     calculatorNums.push(4)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '5':
    //     console.log('5')
    //     calculatorNums.push(5)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '6':
    //     console.log('6')
    //     calculatorNums.push(6)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '7':
    //     console.log('7')
    //     calculatorNums.push(7)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '8':
    //     console.log('8')
    //     calculatorNums.push(8)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '9':
    //     console.log('9')
    //     calculatorNums.push(9)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case '0':
    //     console.log('0')
    //     calculatorNums.push(0)
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    // case 'point':
    //     console.log('.')
    //     calculatorNums.push('.')
    //     document.getElementById("result").innerHTML = calculatorNums.join('');
    //     break;
    //     case 'percent':
    //         console.log('%')
    //         calculatorNums.push('/100')
    //         Num.push(calculatorNums.join(''))
    //         console.log('hit equal: '+ eval(Num.join(' ')))
    //         calculatorNums.length=0
    //         lastResult.push(eval(Num.join(' ')))
    //         Num.length=0
    //         Num.push(lastResult)
    //         document.getElementById("result").innerHTML = eval(Num.join(' '));
    //         break;
    //     case 'plus':
    //         console.log('+')
    //         var temp = calculatorNums.join('')
    //         Num.push(temp)
    //         Num.push("+")
    //         calculatorNums.length=0
    //         break;
    //     case 'equal':
    //         console.log('=')
    //         Num.push(calculatorNums.join(''))
    //         console.log('hit equal: '+ eval(Num.join(' ')))
    //         calculatorNums.length=0
    //         lastResult.push(eval(Num.join(' ')))
    //         Num.length=0
    //         Num.push(lastResult)
    //         document.getElementById("result").innerHTML = eval(Num.join(' '));
    //         break;
    //     case 'ac':
    //         console.log('ac')
    //         calculatorNums.length = 0
    //         Num.length = 0
    //         document.getElementById("result").innerHTML ="0";
    //         break;
    //     case 'multiply':
    //         console.log('*')
    //         var temp = calculatorNums.join('')
    //         Num.push(temp)
    //         Num.push("*")
    //         calculatorNums.length=0
    //         break;
    //     case 'divide':
    //         console.log('/')
    //         var temp = calculatorNums.join('')
    //         Num.push(temp)
    //         Num.push("/")
    //         calculatorNums.length=0
    //         break;
    //     case 'minus':
    //         console.log('-')
    //         var temp = calculatorNums.join('')
    //         Num.push(temp)
    //         Num.push("-")
    //         calculatorNums.length=0
    //         break;
    // }
    // };