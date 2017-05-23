const _  = require('lodash');
const ff = require('feature-filter-geojson');

var copyGeoJsonMetadata = function(geoj) {

    let features  = geoj.features;
    geoj.features = [];

    let gm =  Object.assign({}, geoj);
    geoj.features = features;

    return gm;
}


function filter(geoj, filtexp) {

    let gj     = copyGeoJsonMetadata(geoj);
    let filter = ff(filtexp);

    gj.features = _.filter(geoj.features, filter);

    return gj;
}


module.exports = filter;
