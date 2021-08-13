// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius", () => {

    describe("Errors", () => { 
        it("should return faslse for odd numbers of characters", () => {
            const expected = false;
            const actual = polybius("123", false );
            expect(actual).to.equal(expected);
        })
    });

    describe("Encoding", () => {

        it("should translate i and j for 42", () => {
            const expected = "1121314151122232424252132333435314243444541525354555";
            const actual = polybius("abcdefghijklmnopqrstuvwxyz");
            expect(actual).to.eql(expected);
        });

        it("should ignore capital letters", () => {
            const expected  = "23513434112251";
            const actual = polybius("mEsSaGe");
            expect(actual).to.eql(expected);
        });

        it("should maintain spaces", () => {
            const expected = "11 23513434112251";
            const actual = polybius("a message");
            expect(actual).to.eql(expected); 
        })
    });

    describe("Decoding", () => {

        it("should decode a message with spaces", () => {
            const expected = "hello world";
            const actual = polybius("3251131343 2543241341", false);
            expect(actual).to.equal(expected);
        });

        it("should return 42 for i/j", () => {
            const expected = "i/j";
            const actual = polybius( "42", false);
            expect(actual).to.eql(expected);
        });

        it("should return false for odd number", () => {
            const expected = false;
            const actual = polybius("44324233521254134", false);
            expect(actual).to.equal(expected);
        });

    })
})