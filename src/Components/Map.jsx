import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import Marker from "./Marker";
import "./Style/map.css";
import { useEffect } from "react";

const SimpleMap = ({className,width}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = async () => {
      const api = await fetch(
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"
      );
      const res = await api.json();
      setData(res);
    };
    data();
  }, []);
  const mapRef = useRef();
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  //   const [zoom, setZoom] = useState(11);
  const points = data.map((crime) => ({
    type: "Feature",
    properties: { cluster: false, crimeId: crime.id, category: crime.category },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
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
  return (
    <div className="google_map_container">
      <div className={className}>
        <GoogleMapReact
          style={{ width: {width}}}
          bootstrapURLKeys={{ key: "AIzaSyAptapBAGhPRas_Mgz_3GddElIorTgUyc8" }}
          defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
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
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                //   <Marker
                //     key={`cluster-${cluster.id}`}
                //     lat={latitude}
                //     lng={longitude}
                //   >
                //     <div
                //       className="cluster-marker"
                //     //   style={{
                //     //     width: `${10 + (pointCount / points.length) * 20}px`,
                //     //     height: `${10 + (pointCount / points.length) * 20}px`,
                //     //   }}
                //       onClick={() => {}}
                //     >
                //       {pointCount}
                //     </div>
                //   </Marker>
                <Marker key={i} lat={latitude} lng={longitude}>
                  <button className="crime-marker">
                    <img src="/custody.svg" alt="crime doesn't pay" />
                  </button>
                </Marker>
              );
            }

            return (
              <div>
                {/* <Marker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}
              >
              <button className="crime-marker">
              <img src="/custody.svg" alt="crime doesn't pay" />
              </button>
            </Marker> */}
              </div>
            );
          })}
        </GoogleMapReact>
      </div>
      {/* <div className="overall_users">
        <div className="users">
          <p>Total users</p>
          <h5>257,5840</h5>
        </div>
        <div className="users">
          <p>Total users</p>
          <h5>257,5840</h5>
        </div>
        <div className="users">
          <p>Total users</p>
          <h5>257,5840</h5>
        </div>
        <div className="users">
          <p>Total users</p>
          <h5>257,5840</h5>
        </div>
      </div> */}
    </div>
  );
};
export default SimpleMap;
