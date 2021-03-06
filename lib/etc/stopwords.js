/**
 * Dutchman
 * A Dutch linguistics utility library
 * by Q42
 * -----------------------------------
 * @package   q42:dutchman
 * @author    Jimmy Aupperlee <jimmy@q42.nl>
 * @license   https://github.com/Q42/meteor-dutchman/blob/master/LICENSE  MIT
 * @link      https://atmospherejs.com/q42/dutchman
 */

'use strict';

class Stopwords {
  static NL() {
    return [
      "aan",
      "als",
      "ben",
      "bij",
      "dat",
      "de",
      "den",
      "der",
      "des",
      "deze",
      "die",
      "dit",
      "door",
      "een",
      "en",
      "enige",
      "enkele",
      "enz",
      "et",
      "etc",
      "haar",
      "het",
      "hierin",
      "hoe",
      "heb",
      "hebben",
      "gehad",
      "hun",
      "ik",
      "in",
      "inzake",
      "is",
      "je",
      "met",
      "na",
      "naar",
      "nabij",
      "niet",
      "no",
      "nu",
      "of",
      "om",
      "onder",
      "ons",
      "onze",
      "ook",
      "op",
      "over",
      "pas",
      "te",
      "tegen",
      "ten",
      "ter",
      "tot",
      "uit",
      "van",
      "vanaf",
      "vol",
      "voor",
      "wat",
      "wie",
      "zijn"
    ];
  }

  static EN() {
    return [
      "a",
      "about",
      "above",
      "above",
      "across",
      "after",
      "afterwards",
      "again",
      "against",
      "all",
      "almost",
      "alone",
      "along",
      "already",
      "also",
      "although",
      "always",
      "am",
      "among",
      "amongst",
      "amoungst",
      "amount",
      "an",
      "and",
      "another",
      "any",
      "anyhow",
      "anyone",
      "anything",
      "anyway",
      "anywhere",
      "are",
      "around",
      "as",
      "at",
      "back",
      "be",
      "became",
      "because",
      "become",
      "becomes",
      "becoming",
      "been",
      "before",
      "beforehand",
      "behind",
      "being",
      "below",
      "beside",
      "besides",
      "between",
      "beyond",
      "bill",
      "both",
      "bottom",
      "but",
      "by",
      "call",
      "can",
      "cannot",
      "cant",
      "co",
      "con",
      "could",
      "couldnt",
      "cry",
      "de",
      "describe",
      "detail",
      "do",
      "done",
      "down",
      "due",
      "during",
      "each",
      "eg",
      "eight",
      "either",
      "eleven",
      "else",
      "elsewhere",
      "empty",
      "enough",
      "etc",
      "even",
      "ever",
      "every",
      "everyone",
      "everything",
      "everywhere",
      "except",
      "few",
      "fifteen",
      "fify",
      "fill",
      "find",
      "fire",
      "first",
      "five",
      "for",
      "former",
      "formerly",
      "forty",
      "found",
      "four",
      "from",
      "front",
      "full",
      "further",
      "get",
      "give",
      "go",
      "had",
      "has",
      "hasnt",
      "have",
      "he",
      "hence",
      "her",
      "here",
      "hereafter",
      "hereby",
      "herein",
      "hereupon",
      "hers",
      "herself",
      "him",
      "himself",
      "his",
      "how",
      "however",
      "hundred",
      "ie",
      "if",
      "in",
      "inc",
      "indeed",
      "interest",
      "into",
      "is",
      "it",
      "its",
      "itself",
      "keep",
      "last",
      "latter",
      "large",
      "latterly",
      "least",
      "less",
      "ltd",
      "made",
      "many",
      "may",
      "me",
      "meanwhile",
      "might",
      "mill",
      "mine",
      "more",
      "moreover",
      "most",
      "mostly",
      "move",
      "much",
      "must",
      "my",
      "myself",
      "name",
      "namely",
      "neither",
      "never",
      "nevertheless",
      "next",
      "nine",
      "no",
      "nobody",
      "none",
      "noone",
      "nor",
      "not",
      "nothing",
      "now",
      "nowhere",
      "of",
      "off",
      "often",
      "on",
      "once",
      "one",
      "only",
      "onto",
      "or",
      "other",
      "others",
      "otherwise",
      "our",
      "ours",
      "ourselves",
      "out",
      "over",
      "own",
      "part",
      "per",
      "perhaps",
      "please",
      "put",
      "rather",
      "re",
      "same",
      "see",
      "seem",
      "seemed",
      "seeming",
      "seems",
      "serious",
      "several",
      "she",
      "should",
      "show",
      "side",
      "since",
      "sincere",
      "six",
      "sixty",
      "so",
      "some",
      "somehow",
      "someone",
      "something",
      "sometime",
      "sometimes",
      "somewhere",
      "small",
      "still",
      "such",
      "system",
      "take",
      "ten",
      "than",
      "that",
      "the",
      "their",
      "them",
      "themselves",
      "then",
      "thence",
      "there",
      "thereafter",
      "thereby",
      "therefore",
      "therein",
      "thereupon",
      "these",
      "they",
      "thickv",
      "thin",
      "third",
      "this",
      "those",
      "though",
      "three",
      "through",
      "throughout",
      "thru",
      "thus",
      "to",
      "together",
      "too",
      "top",
      "toward",
      "towards",
      "twelve",
      "twenty",
      "two",
      "un",
      "under",
      "until",
      "up",
      "upon",
      "us",
      "very",
      "via",
      "was",
      "we",
      "well",
      "were",
      "what",
      "whatever",
      "when",
      "whence",
      "whenever",
      "where",
      "whereafter",
      "whereas",
      "whereby",
      "wherein",
      "whereupon",
      "wherever",
      "whether",
      "which",
      "while",
      "whither",
      "who",
      "whoever",
      "whole",
      "whom",
      "whose",
      "why",
      "will",
      "with",
      "within",
      "without",
      "would",
      "yet",
      "you",
      "your",
      "yours",
      "yourself",
      "yourselves",
      "the"
    ];
  }
}

export default Stopwords;
