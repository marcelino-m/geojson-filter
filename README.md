# geojson-filter

Return a new GeoJson only whit features  which pass the filter, this library is a tiny wrapper
around [feature\-filter\-geojson][1].

Go to [feature\-filter\-geojson][1] for complete doc about  filter array possibilities.

# usage

```javascript

const gjfilter = require('geojson-filter');

const filter = ["==", "prop0", "value0"];

let geojson = { "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
            "properties": {
            "prop0": "value0"
        }
        },
      { "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
            ]
          },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
          }
        },
      { "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
               [100.0, 1.0], [100.0, 0.0] ]
             ]
         },
         "properties": {
           "prop0": "value1",
           "prop1": {"this": "that"}
           }
         }
       ]
     };

console.log(JSON.stringify(gjfilter(geojson, filter)));

```

The output is:

```javascript

{ "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
            "properties": {
            "prop0": "value0"
        }
        },
      { "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
            ]
          },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
          }
        }
       ]
     }

```


[1]: https://www.npmjs.com/package/feature-filter-geojson
