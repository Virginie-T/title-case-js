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
});
