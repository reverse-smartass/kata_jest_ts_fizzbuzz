export class FizzBuzz{
    answerFor(arg0: number): string | number {
        /*let dividable:boolean = false;
        let result : string | number = arg0 ;
        
        if(isFizz(arg0)){
            result = "Fizz";
            dividable = true;
        }

        if(isBuzz(arg0)){
            if(dividable){
                result += "Buzz";
            }else{
                result = "Buzz";
            }
            
        }*/

        if(isFizz(arg0) && isBuzz(arg0)) return "FizzBuzz";
        if(isFizz(arg0)) return "Fizz";
        if(isBuzz(arg0)) return "Buzz";

        return arg0;
    }


}

function isBuzz(arg0: number) {
    return arg0 % 5 === 0;
}

function isFizz(arg0: number) {
    return arg0 % 3 === 0;
}
