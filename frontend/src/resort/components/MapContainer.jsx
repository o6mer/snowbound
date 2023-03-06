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
import Rating from "@mui/material/Rating";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const MapContainer = ({ location, name, category }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (!location) return;
    const fetchData = async () => {
      try {
        setIsloading(true);
        const { data } = await axios.post(
          "http://localhost:8000/api/google/find-nearby",
          { location, category }
        );

        if (!data) return;

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
  return (
    <div className="flex w-full justify-center gap-2 max-h-[80vh] ">
      <PlacesList
        places={places}
        selected={selected}
        setSelected={setSelected}
      />
      <Map
        location={location}
        places={places}
        name={name}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

const Map = ({ location, places, name, selected, setSelected }) => {
  const [lat, lng] = location?.split(",");
  const calcCenter = { lat: Number(lat), lng: Number(lng) };

  return (
    <GoogleMap
      zoom={10}
      center={selected?.geometry.location || calcCenter}
      mapContainerStyle={{
        width: "70%",
      }}
    >
      <MarkerF label={name} position={calcCenter} />
      <MarkerPopup />
      {places?.map((place) => (
        <MarkerF
          onClick={() => setSelected(place)}
          position={place.geometry.location}
          key={place.place_id + place.name}
        />
      ))}
    </GoogleMap>
  );
};

const MarkerPopup = ({ location, place }) => {
  return (
    <div className="bg-white">
      <p>{place.name}</p>
    </div>
  );
};

const PlacesList = ({ places, selected, setSelected }) => {
  return (
    <div className="w-[30%] overflow-y-scroll flex flex-col">
      {places?.map((place) => (
        <button
          key={place.place_id}
          className={`${
            selected?.place_id === place.place_id
              ? "bg-slate-200 hover:bg-slate-300"
              : "hover:bg-slate-200"
          } transition-all text-left px-2 py-1`}
          onClick={() => setSelected(place)}
        >
          <p>{place?.name}</p>
          <div className="flex">
            <Rating name="read-only" value={place?.rating} readOnly />
            <p>({place?.user_ratings_total})</p>
          </div>
        </button>
      ))}
    </div>
  );
};

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => setValue(e.currentTarget.value)}
//         disabled={!ready}
//         className="w-full "
//         placeholder="Seach an address"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };

export default MapContainer;
