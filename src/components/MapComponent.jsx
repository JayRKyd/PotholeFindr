import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import supabase from '../config/supabase';

const MapComponent = () => {
  const [potholes, setPotholes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mapContainerRef = useRef(null);
  const initialLatitude = 26.530389;
  const initialLongitude = -78.693342;
  const initialZoomLevel = 12;
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const proxyBaseUrl = 'http://localhost:3001'

  useEffect(() => {
  async function fetchData() {
    try {
      // Fetch data from Mapbox API via proxy server
      const mapboxResponse = await fetch(`${proxyBaseUrl}/mapbox-api`);
      const { data: mapboxData, error: mapboxError } = await mapboxResponse.json();

      if (mapboxError) {
        console.error('Error fetching potholes from Mapbox:', mapboxError.message);
      } else {
        console.log('Potholes fetched successfully from Mapbox:', mapboxData);
        // Set Mapbox data in state (if needed)
      }

      // Fetch data from Supabase
      const { data: supabaseData, error: supabaseError } = await supabase.from('potholes').select('*');

      if (supabaseError) {
        console.error('Error fetching potholes from Supabase:', supabaseError.message);
      } else {
        console.log('Potholes fetched successfully from Supabase:', supabaseData);
        setPotholes(supabaseData);
      }
    } catch (error) {
      console.error('Error fetching potholes:', error.message);
    } finally {
      setIsLoading(false);
    }
  }

  fetchData();
}, []); 

  useEffect(() => {
    // Check if window object exists (i.e., we are on the client-side)
    if (typeof window !== 'undefined' && !isLoading && mapContainerRef.current) {
      mapboxgl.accessToken = mapboxAccessToken;
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [initialLongitude, initialLatitude],
        zoom: initialZoomLevel,
        attributionControl: false,
        zoomControl: true,
      });

      // Add markers for potholes
      potholes.forEach((pothole) => {
        const { latitude, longitude, severity } = pothole;
        const severityColors = {
          Low: 'green',
          Medium: 'yellow',
          High: 'red',
        };

        new mapboxgl.Marker({
          color: severityColors[severity],
        })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setText(`Severity: ${severity}`))
          .addTo(map);
      });

      // Clean up the map instance on component unmount
      return () => {
        map.remove();
      };
    }
  }, [isLoading, initialLatitude, initialLongitude, initialZoomLevel, mapboxAccessToken, potholes]);

  return <div className='map-size' ref={mapContainerRef}  />;
};

export default MapComponent;