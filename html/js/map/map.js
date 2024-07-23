((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
  key: "AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo",
  // Add other bootstrap parameters as needed, using camel case.
  // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});

let map;



export async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { icons } = await import("./iconsConfig.js");

  // The location of Paris
  const position = { lat: 48.866, lng: 2.333 };
  // const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const zoom = 12;
  const center = { lat: 48.866, lng: 2.333 };
  const bounds = {
    north: center.lat + 0.15,
    south: center.lat - 0.15,
    east: center.lng + 0.32,
    west: center.lng - 0.32,
  };
  map = new Map(document.getElementById("map"), {
    center: center,
    zoom: zoom,
    // minZoom: zoom - 1,
    // maxZoom: zoom + 10,
    // restriction: {
    //     latLngBounds: bounds,
    //     strictBounds: false
    //   },
    mapId: " f1e6188476cdfda9", // important to enable the use of markers
  });

  const iconSize = { width: 28, height: 28 };

  const features = [
    // { position: { lat: 48.855787, lng: 2.346845 }, type: "athletisme" },
    // { position: { lat: 48.856, lng: 2.352 }, type: "football" },
    { position: { lat: 48.892376, lng: 2.344782 }, type: "tennis" },
    { position: { lat: 48.855787, lng: 2.346845 }, type: "kayak" },
  ];



  features.forEach(feature => {
    const iconImage = document.createElement("img");
    iconImage.src = icons[feature.type] || icons.default;
    iconImage.width = iconSize.width;  // Set icon width
    iconImage.height = iconSize.height;  // Set icon height
  console.log("Icon Path:", icons[feature.type] || icons.default);


    const marker = new AdvancedMarkerElement({
      map: map,
      position: feature.position,
      content: iconImage
    });
    console.log(iconImage)

  });

}

// initMap(); // je commente cette ligne car on appelle deja la function dans le component
