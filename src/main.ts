import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

declare var shp:any;




mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2VudG5hYmV0IiwiYSI6ImNsOGFrZnhzNDBoY2wzd251OWJrMWVhZGgifQ.-fsieaEBRaun4JqH6mrFig';
const map = new mapboxgl.Map({
container: 'map', // container ID
//style: 'mapbox://styles/mapbox/streets-v11', // style URL
style: "https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json",
center:{ lat: 49.456142714868385, lon: 2.09572399732307}, // starting position [lng, lat]
zoom: 14, // starting zoom
//projection: 'globe' // display the map as a 3D globe
});



console.log("jljjl", shp)