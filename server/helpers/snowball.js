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

import FlyingDutchman from '../../lib/flying'

const   Snowball    = Npm.require('snowball'),
        stemmer     = new Snowball('English');

class DutchmanSnowball {

    static stem(string) {
        check(string, String);
        const perWord = FlyingDutchman.cleanString(string).split(" ");
        let stemmed = [];

        perWord.forEach(toStem => {
            stemmer.setCurrent(toStem);
            stemmer.stem();
            stemmed.push(stemmer.getCurrent());
        });

        return stemmed.join(" ");
    }
};

export default DutchmanSnowball;
