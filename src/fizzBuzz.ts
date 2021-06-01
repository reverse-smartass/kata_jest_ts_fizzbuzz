export class FizzBuzz {
    réponsePour(arg0: number): string | number {
        const isFizz: boolean = this.isFizz(arg0);
        const isBuzz: boolean = this.isBuzz(arg0);
        return isFizz ? (isBuzz ? 'FizzBuzz' : 'Fizz') : (isBuzz ? 'Buzz' : arg0);
    }

    private isBuzz(arg0: number) {
        return arg0 % 5 === 0;
    }

    private isFizz(arg0: number) {
        return arg0 % 3 === 0;
    }

}