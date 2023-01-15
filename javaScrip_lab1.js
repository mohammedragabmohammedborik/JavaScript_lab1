
addition(1,2)

triArea(2,4)
giveMeSomething("is good")

// addition function
function addition(number1=0, number2=0){
    console.log(number1+number2)
return (number1+number2);

}

// calculation of triangle area
function triArea(base,heigt){
    let triangleArea=.5*base*heigt
    console.log(triangleArea)

    return triangleArea
}

// give me something
function giveMeSomething(text="funny"){
    let concatenatedText="something  "+text
    console.log(concatenatedText)

    return concatenatedText
}