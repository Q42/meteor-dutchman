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

import FlyingDutchman from '../lib/flying'
import Stopwords from '../lib/etc/stopwords'

/**
 * Methods available on the client
 * @class Meteor.DutchmanServer
 * @constructor
 */
class DutchmanClient {

    /**
     * @method removeStopWords
     * @param {String} string The string from which to remove the stopwords
     * @param {String} lang The languageCode for which stopwords array to use in the process.
     *                      At the moment this can either be 'nl' or 'en'
     * @return {Array} returns an array containing all valid stems
     */
    removeStopWords(string, lang) {

        check(string, String);
        return FlyingDutchman.removeStopWords(FlyingDutchman.cleanString(string),
            (lang == 'en') ? Stopwords.EN() : Stopwords.NL());
    }
};

export default DutchmanClient;
