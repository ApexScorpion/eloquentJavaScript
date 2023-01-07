for(num =0;num <=100;num++){
    switch(num){
        case num % 3 == 0 && num % 5 != 0:
            console.log("Fizz");
            break;
        case num % 5 == 0 && num % 3 != 0:
            console.log("Buzz");
            break;
        case num % 5 == 0 && num % 3 == 0:
            console.log("FizzBuzz")
            break;
        default:
            console.log(num);
            break;
    }
}
