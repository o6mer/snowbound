import React, { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axios from "axios";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const MapContainer = ({ location, category }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const { data } = await axios.post(
          "http://localhost:8000/api/google/find-nearby",
          { location, category }
        );
        console.log(data.results);
        setPlaces(data.results);
        setIsloading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location, category]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded || isLoading) return <div>Loading...</div>;
  return <Map places={places} />;
};

const Map = ({ places }) => {
  const center = places[0]?.geometry.location;
  const [selected, setSelected] = useState(null);
  return (
    <div className="relative flex">
      {/* <div className="absolute top-2 left-0 translate-x-[50%] z-10 w-[300px]">
        <PlacesAutocomplete setSelected={setSelected} />
      </div> */}
      <div>
        {places.map((place) => (
          <div>
            <p>{place.name}</p>
          </div>
        ))}
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{
          width: "400px",
          height: "400px",
        }}
      >
        {places?.map((place) => (
          <MarkerF position={place.geometry.location} />
        ))}
        {/* {selected && <MarkerF position={selected} />} */}
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        disabled={!ready}
        className="w-full "
        placeholder="Seach an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default MapContainer;
