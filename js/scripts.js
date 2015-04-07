function titleCase(word) {

    var lowerWord = word.toLowerCase();

    var noCap = ["a", "the"];

    var list_of_words = lowerWord.split(" ");

    var wordArray = [];

    for (var wordz = 0; wordz < list_of_words.length; wordz++) {

        if (list_of_words[wordz] === noCap[0] || list_of_words[wordz] === noCap[1]) {
            wordArray.push(list_of_words[wordz]);
        }

        else {
            var UpperCase = list_of_words[wordz].charAt(0).toUpperCase();
            var temp = list_of_words[wordz].substring(1);
            wordArray.push(UpperCase + temp);
        }
    }

    var stringArray = wordArray.join(" ");

    var final = stringArray[0].toUpperCase() + stringArray.substring(1);

    return final;
}
