function titleCase(word) {

    var lowerWord = word.toLowerCase();

    var list_of_words = lowerWord.split(" ");

    var wordArray = [];

    // var Upper1 = list_of_words[0].charAt(0).toUpperCase();
    // var Upper2 = list_of_words[1].charAt(0).toUpperCase();

    // wordArray.push(Upper1, Upper2);

    for (var wordz = 0; wordz < list_of_words.length; wordz++) {
        var UpperCase = list_of_words[wordz].charAt(0).toUpperCase();
        var temp = list_of_words[wordz].substring(1);
        wordArray.push(UpperCase + temp);
    }

    return wordArray.join(" ");
}
