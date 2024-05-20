describe("checkBrackets", () => {
    it("case.SingleBracket", () => assert.equal(checkBrackets('('), 1));
    it("case.SingleBracketMismatch", () => assert.equal(checkBrackets(')'), 1));
    it("case.CorrectBrackets", () => assert.equal(checkBrackets('(1) (2) (3) (4)'), 0));
    it("case.CorrectNestedBrackets", () => assert.equal(checkBrackets('((((((((iii))))))))'), 0));
    it("case.MultipleBrackets", () => assert.equal(checkBrackets('()()()()()'), 0));
    it("case.MultipleBracketsWithText", () => assert.equal(checkBrackets('()()(string)'), 0));
    it("case.MultipleBracketMismatch", () => assert.equal(checkBrackets('() )('), 2));
    it("case.SingleBracketInText", () => assert.equal(checkBrackets('string with a ( bracket'), 1));
    it("case.SingleBracketMismatchInText", () => assert.equal(checkBrackets('string with a ) bracket'), 1));
    it("case.MultipleNestedBrackets", () => assert.equal(checkBrackets('((1(2)(3))((4)))'), 0));

    it("case.EmptyString", () => assert.equal(checkBrackets(''), 0));
    it("case.NoBrackets", () => assert.equal(checkBrackets('string'), 0));
    it("case.NestedBracketsMismatch", () => assert.equal(checkBrackets('(((((((((iii))))))))'), 0));
    it("case", () => {
        assert.equal(checkBrackets([1, 2, 3])).to.equal(-1);
    });
    it("сase", () => {
        assert.equal(checkBrackets(123456)).to.equal(-1);
    });
});

