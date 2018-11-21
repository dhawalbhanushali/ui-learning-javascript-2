var squareRoot =  {
    root : function(value){
        type = typeof(value);
        if(type === 'number'){
            return Math.sqrt(value);
        }else{
            return type;
        }
    }
}

var verifyPerfectSquare = function(value){
    let perfectSquare = this.root(value);
    if(value%perfectSquare == 0 | value === 0){
        console.log("Square Root is: "+ perfectSquare+"\n");
        return perfectSquare;
    }else{
        console.log("Pefect Square can not be found due to- "+ perfectSquare);
        return perfectSquare = value;
    }
}

verifyPerfectSquare.call(squareRoot, 0);
verifyPerfectSquare.call(squareRoot, 1);
console.log(verifyPerfectSquare.call(squareRoot, 2));

var result = verifyPerfectSquare.bind(squareRoot, "njjns");
console.log("Result : "+result()+"\n");

result = verifyPerfectSquare.bind(squareRoot, 43);
console.log("Result : "+ result()+"\n");

verifyPerfectSquare.apply(squareRoot, [81]);