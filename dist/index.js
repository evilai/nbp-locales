'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.locales = locales;

exports.default = function (vocabulary) {
    return function (lang) {
        return function (key, data) {
            return (0, _sample2.default)(locales(vocabulary, lang, key, data));
        };
    };
};

var _sample = require('lodash/sample');

var _sample2 = _interopRequireDefault(_sample);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function locales(vocabulary) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
    var key = arguments[2];
    var passData = arguments[3];

    if (passData) {
        return (0, _get2.default)(vocabulary[lang], key)(passData);
    }

    return (0, _get2.default)(vocabulary[lang], key) || key;
}
