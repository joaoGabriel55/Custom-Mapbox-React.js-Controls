import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from "react";
import { CustomControl } from "./CustomControl";
import "./styles.css";

mapboxgl.accessToken = 'YOUR_TOKEN'

const MapViewer = ({ children }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const refs = useRef([]);
  const mapCustomControlsRefs = useRef([]);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-left');
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');
    map.current.addControl(new CustomControl({ container: mapCustomControlsRefs.current }), 'top-left');
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    refs.current.forEach(({ children }) => {
      const [child] = children;
      map.current.addControl(new CustomControl({ container: child }));
    });
  }, [children]);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <div ref={mapCustomControlsRefs} className="mapboxgl-ctrl custom-map-control">
        <button>My Test</button>
      </div>
      {React.Children.map(children, (child) => (
        <div ref={(element) => refs.current.push(element)}>
          <div>{child}</div>
        </div>
      ))}
    </div>
  );
};

export default MapViewer;
