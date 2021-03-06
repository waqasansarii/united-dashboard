import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import { mapData } from "../Pages/Data/mapData";
import { mapStyle } from "./mapStyle";
import Marker from "./Marker";
import "./Style/map.css";

const SimpleMap = ({ className, width }) => {
  const mapRef = useRef();
  const points = mapData.map((crime) => ({
    type: "Feature",
    properties: {
      cluster: true,
      userId: crime.id,
      category: crime.category,
      img: crime.img,
      users: crime.user,
    },
    geometry: {
      type: "Point",
      coordinates: [crime.location.longitude, crime.location.latitude],
    },
  }));
  // get map bounds
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(13);
  const { clusters, supercluster } = useSupercluster({
    // data,
    points,
    bounds,
    zoom: 12,
    options: { radius: 75, maxZoom: 20 },
  });
  const options = {
    styles: mapStyle,
  };
  return (
    <div className="google_map_container">
      <div className={className}>
        <GoogleMapReact
          style={{ width: { width } }}
          // bootstrapURLKeys={{ key: "API " }}
          defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          options={options}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {clusters.map((cluster, i) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              users,
              img,
              category,
            } = cluster.properties;
            if (isCluster) {
              return (
                <Marker
                  key={i}
                  lat={latitude}
                  lng={longitude}
                  users={users}
                  img={img}
                  name={category}
                />
              );
            }
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default SimpleMap;
