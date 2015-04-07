function titleCase(word) {

    var lowerWord = word.toLowerCase();

    var noCap = ["a", "the", "an", "and", "but", "or", "nor", "at",
    "by", "for", "from", "in", "into", "of", "off", "on", "onto",
    "out", "up", "with", "to", "as", "is"];

    var list_of_words = lowerWord.split(" ");

    var wordArray = [];

    for (var wordz = 0; wordz < list_of_words.length; wordz++) {

        if ($.inArray(list_of_words[wordz], noCap) != -1) {
              wordArray.push(list_of_words[wordz]);
        }
        else {
            var UpperCase = list_of_words[wordz].charAt(0).toUpperCase();
            var temp = list_of_words[wordz].substring(1);
            wordArray.push(UpperCase + temp);
        }
    };

    var stringArray = wordArray.join(" ");

    var final = stringArray[0].toUpperCase() + stringArray.substring(1);

    return final;
};

$(document).ready(function() {

    $("form#form_sentence").submit(function(event) {
        var words = $("input#input").val();
        var result = titleCase(words);

        // alert(result);

        $("#title-cased").text(result);

        $("#result").show();
        event.preventDefault();

    });
});
