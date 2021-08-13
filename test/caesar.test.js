// Write your tests here!
const expect = require('chai').expect;
const { caesar } = require('../src/caesar');

describe("Caesar", () => {
   
    describe ("Shift defaults", () => {

        it("should return false if the shift value is 0, > 25, < -25, undefined.", () => {
            let actual = (caesar ("thinkful", 0) || caesar("thinkful", -26) || caesar("thinkful", 26) || caesar("thinkful", undefined));
            expect(actual).to.be.false;
        });
    }); 

    describe ("Testing cases", () => {
        
        it("should ignore capital letters", () => {
            let expected = "wklqnixo";
            let actual = caesar("ThinkFul", 3);
            expect(actual).to.equal(expected);
        });

        it("should wrap to front of alphabet", () => {
            let expected = "chogd";
            let actual = caesar("zelda", 3);
            expect(actual).to.equal(expected);
        });

        it("should keep spaces and special characters when encoding", () => {
            let expected = "bpqa qa i amkzmb umaaiom!";
            let actual = caesar("This is a secret message!", 8);
            expect(actual).to.eql(expected);
        });

        it("should keep spaces and special characters when decoding", () => {
            let expected = "this is a secret message!";
            let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            expect(actual).to.eql(expected);
        });
    });
});