const _  = require('lodash');
const ff = require('feature-filter-geojson');


function filter(geoj, filtexp) {

    // clone geoj  metadata
    let features  = geoj.features;
    geoj.features = [];
    let geojclon  =  Object.assign({}, geoj);
    geoj.features = features;

    let filter = ff(filtexp);
    geojclon.features = _.filter(geoj.features, filter);

    return geojclon;
}


module.exports = filter;
