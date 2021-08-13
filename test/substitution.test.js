// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require('chai').expect;

describe('Substitution tests', () => {
    
    it('Encode, no spaces, handles capital letters', () => {
        const expected = "jrufscpw";
        const actual = substitution("ThinkfuL", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    
    it('Encode, yet returns false for duplicate letters in given alphabet', () => {
        const expected = false;
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzippp");
        expect(actual).to.equal(expected);
    })
    
    it('return false if given alphabet is less than 26', () => {
        const expected = false;
        const actual = substitution("thinkful", "xoyqmcgrukswaflnv");
        expect(actual).to.equal(expected);
    })
    
    it('Encode, with spaces', () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    
    it('Decode, no spaces', () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
    
})

