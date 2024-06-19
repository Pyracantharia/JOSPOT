import BrowserRouter from "./components/BrowserRouter.js";
import routes from "./routes.js";

BrowserRouter(document.getElementById("root"), routes);


(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo",
  // Add other bootstrap parameters as needed, using camel case.
  // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});



let map;

async function initMap() {
const { Map } = await google.maps.importLibrary("maps");
// The location of Paris


const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const spots = {
  "Paris": {
    position: {lat: 48.866667, lng: 2.333333}
  },
  "Nantes": {
    position: {lat: 47.216671, lng: -1.55}
  },
  "Chateauroux": {
    position: {
      lat: 46.813744,
      lng: 1.693057
    }
  },
  "Bordeaux": {
    position: {
      lat: 44.8333,
      lng: -0.5667
    }
  }
}


function generateMarkers(spots, map){
  for(const city in spots){
    let marker = new AdvancedMarkerElement({
      map: map,
      position: spots[city].position,
      title: `${city}`
    });
  }
}

const zoom = 6;
const center = { lat: 47.700000, lng: 2.633333 }
const bounds = {
  north: center.lat + 6,
  south: center.lat - 6,
  east: center.lng + 10,
  west: center.lng - 10,
};
map = new Map(document.getElementById("map"), {
  center: center,
  zoom: zoom,
  minZoom: zoom - 1,
  maxZoom: zoom + 10,
  restriction: {
      latLngBounds: bounds,
      strictBounds: false
    },
  mapId: "f1e6188476cdfda9" // important to enable the use of markers
});

// generateMarkers(spots, map);

}

// initMap();
