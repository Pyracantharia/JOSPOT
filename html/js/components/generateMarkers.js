export default function generateMarkers(siteInfos, map, AdvancedMarkerElement) {
    siteInfos.forEach(site => {
        if (site.latitude && site.longitude) {
            new AdvancedMarkerElement({
                map: map,
                position: { lat: site.latitude, lng: site.longitude },
                title: site.location
            });
        }
    });
}
