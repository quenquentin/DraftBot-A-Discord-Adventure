const ItemAbstract = require("entities/ItemAbstract");

/**
 * @property {Number} id
 * @property {Number} rarity
 * @property {Number} power
 * @property {Object} translations
 * @property {String} translations.fr
 * @property {String} translations.en
 * @property {Number} nature
 */
class Potion extends ItemAbstract {

    /**
     * @param {Number} id
     * @param {Number} rarity
     * @param {Number} power
     * @param {Object} translations
     * @param {String} translations.fr
     * @param {String} translations.en
     * @param {Number} nature
     */
    constructor({id, rarity, power, translations, nature}) {
        super({id, rarity, power, translations});
        this.nature = nature;
    }

    /**
     * Return an object of potion for display purposes
     * @param {("fr"|"en")} language - The language the object has to be displayed in
     * @returns {Object}
     */
    toFieldObject(language) {
        return {
            name: JsonReader.entities.potion.getTranslation(language).fieldName,
            value: (this.id === 0) ? this.getTranslation(language) : format(
                JsonReader.entities.potion.getTranslation(language).fieldValue, {
                    name: this.getTranslation(language),
                    nature: this.getNatureTranslation(language),
                    rarity: this.getRarityTranslation(language),
                }),
        };
    }

    /**
     * Return the nature translation of the potion
     * @param {("fr"|"en")} language
     * @returns {String}
     */
    getNatureTranslation(language) {
        return format(JsonReader.entities.potion.getTranslation(language).natures[this.nature], {power: this.power});
    }

}

module.exports = Potion;
