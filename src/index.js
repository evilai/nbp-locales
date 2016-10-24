import sample from 'lodash/sample';
import getItem from 'lodash/get';

export function locales(vocabulary, lang = 'en', key, passData) {
    if (passData) {
        return getItem(vocabulary[lang], key)(passData);
    }

    return getItem(vocabulary[lang], key) || key;
}

export default function(vocabulary) {
    return (lang) => (key, data) => sample(locales(vocabulary, lang, key, data));
}
