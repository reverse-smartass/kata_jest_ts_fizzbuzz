import { FizzBuzz } from "../src/fizzBuzz"

var fizzBuzz: FizzBuzz;

beforeAll(() => {
    // arrange
    fizzBuzz = new FizzBuzz()
})

describe("FizzBuzz suite:", () => {
    it("argument de 1 retourne 1", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(1)

        // assert
        expect(actual).toEqual(1)
    });

    it("argument de 2 retourne 2", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(2)

        // assert
        expect(actual).toEqual(2)
    });

    it("argument de 3 retourne Fizz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(3)

        // assert
        expect(actual).toEqual("Fizz")
    });

    it("argument de 6 retourne Fizz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(6)

        // assert
        expect(actual).toEqual("Fizz")
    });

    it("argument de 5 retourne Buzz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(5)

        // assert
        expect(actual).toEqual("Buzz")
    });

    it("argument de 10 retourne Buzz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(10)

        // assert
        expect(actual).toEqual("Buzz")
    });

    it("argument de 15 retourne FizzBuzz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(15)

        // assert
        expect(actual).toEqual("FizzBuzz")
    });

    it("argument de 30 retourne FizzBuzz", () => {
        // act
        const actual: number | string = fizzBuzz.réponsePour(30)

        // assert
        expect(actual).toEqual("FizzBuzz")
    });

})

