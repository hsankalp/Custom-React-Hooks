import { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        const location = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
        setLocation(location);
      });
    }
  }, []);

  return location;
};
