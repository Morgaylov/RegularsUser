/**
 * Created by Dmitry on 29.01.14.
 */
function getMatches(text, reg)
{
    var found = new Array();                             // Array of sentences that satisfies the expression reg
    var regexp = /[A-Z]+[#№\(\)\(\w\s\-\,:;]+[.?!]+/gi; // Regular to split text on sentences
    var sentences = text.match(regexp);                  // Array of all sentences in the text

    // Checking every sentence using the expression reg
    for(var i = 0; i < sentences.length; i++)
    {
        if(sentences[i].search(reg) != -1)
        {
            found.push(sentences[i]);
        }
    }

    return found;
}

exports.getMatches = getMatches;