describe('titleCase', function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("capitalizes the first letter of a fully capitalized word", function() {
        expect(titleCase("CAT")).to.equal("Cat");
    });

    it("capitalizes the first letter of two different words", function() {
        expect(titleCase("deaD CAT")).to.equal("Dead Cat");
    });

    it("capitalizes the first letter of three different words", function() {
        expect(titleCase("sUpEr deaD CAT")).to.equal("Super Dead Cat");
    });

    it("does not capitalize the word 'a' in the middle of a sentence", function() {
        expect(titleCase("you are a neat person")).to.equal("You Are a Neat Person");
    });

    it("capitalizes 'a' at the first position in a sentence", function() {
        expect(titleCase("a CAT")).to.equal("A Cat");
    });

    it("capitalizes 'the' at the first position in a sentence", function() {
        expect(titleCase("thE CAT")).to.equal("The Cat");
    });

    it("does not capitalize words that are acceptions in title case, unless it is at the beginning", function() {
        expect(titleCase("the Little mermaid is and weird movie")).to.equal("The Little Mermaid is and Weird Movie");
    });
});
