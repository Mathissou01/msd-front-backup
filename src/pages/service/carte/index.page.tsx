import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useGeolocation } from "../../../hooks/geoLocation/useGeolocation";
import useFilterMarkers from "../../../hooks/geoLocation/useNearbyLocations";
import {
  IContentData,
  IFilterData,
  IGeoPosition,
  IMarker,
} from "../../../lib/map";
import { removeNulls } from "../../../lib/utilities";
import CollapsingContent from "../../../components/Map/CollapsingContent/CollapsingContent";
import MarkerFilterMap from "../../../components/Map/Marker/MarkerFilter/MarkerFilterMap";
import ContentMap from "../../../components/Map/Content/ContentMap";
import LayersMap from "../../../components/Map/LayersMap";
import SearchMap from "../../../components/Map/Search/SearchMap";
import "./carte-page.scss";

type Position = IGeoPosition | null;

const getAllNamesCount = (markers: IMarker[]): Record<string, IFilterData> => {
  return markers.reduce((acc, item) => {
    const name = item.collect?.name ? item.collect.name : "";
    const picto = item.collect?.picto.url ? item.collect?.picto.url : "";
    const pictoName = item.collect?.picto.name ? item.collect?.picto.name : "";
    if (!acc[name]) {
      acc[name] = { name, count: 0, picto, pictoName };
    }
    acc[name].count += 1;
    return acc;
  }, {} as Record<string, IFilterData>);
};

// Function to get specific drop off maps
const getSpecificNameDropOffMaps = (markers: IMarker[], targetName: string) => {
  return markers.filter(({ collect: { name } }) => name === targetName);
};

export default function ServiceCartePage() {
  const [markers, setMarkers] = useState<IMarker[]>();
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const [destination, setDestination] = useState<Position>(null);
  const [{ position, error, disable }, fetchGeolocation] = useGeolocation();
  const [selectedContent, setSelectedContent] = useState<IContentData | null>(
    null,
  );
  const [geoLocation, setGeoLocation] = useState<Position>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | undefined>(
    undefined,
  );
  const [selectedAddress, setSelectedAddress] = useState<Position>(null);
  const [autoUpdatePosition, setAutoUpdatePosition] = useState<boolean>(true);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { pav } = router.query;
  const pavQueryParam = pav && typeof pav === "string" ? pav : undefined;

  const checkPosition = (): Position => geoLocation || selectedAddress;

  useEffect(() => {
    if (autoUpdatePosition) {
      setGeoLocation(position);
      setSelectedAddress(null);
    }
  }, [position, autoUpdatePosition]);

  useEffect(() => {
    if (selectedAddress) {
      setAutoUpdatePosition(false);
      setGeoLocation(null);
    }
  }, [selectedAddress]);

  const fetchGeolocationWithAutoUpdate = () => {
    setAutoUpdatePosition(true);
    fetchGeolocation();
  };

  const onMarkerClick = (marker: IMarker) => {
    const data = {
      infoId: marker.id,
      infoPicto: marker.picto,
      infoPictoName: marker.pictoName,
      infoName: marker.name,
      infoAddress: marker.address,
      infoPostal: marker.postal,
      infoDistance: marker.distanceText,
      infoLat: marker.lat,
      infoLng: marker.lng,
      infoMustKnow: marker.mustKnow,
      infoTime: marker.time,
      infoFiles: marker.files,
      infoCollectGender: marker.collectGender,
    } as IContentData;

    setMessage(message);
    setSelectedContent(data);
    setShowModal(true);
    setSelectedMarkerId(selectedMarkerId);
  };

  const filteredMarkers = useFilterMarkers(
    isMapLoaded,
    checkPosition(),
    markers,
    30,
  );

  const closeModal = () => setShowModal(false);

  const { filters, data } = useMemo(() => {
    const allNameCounts = getAllNamesCount(filteredMarkers as IMarker[]);
    const filters = Object.values(allNameCounts);
    const dropOffMaps = selectedFilter
      ? getSpecificNameDropOffMaps(filteredMarkers as IMarker[], selectedFilter)
      : filteredMarkers;
    return {
      filters,
      data: [{ name: selectedFilter, dropOffMaps }],
    };
  }, [filteredMarkers, selectedFilter]);
  // Function to handle content clicks
  const handleContentClick = (
    content: IContentData | null,
    message: string,
  ) => {
    setMessage(message);
    setSelectedContent(content);
    setShowModal(true);
    setSelectedMarkerId(content?.infoId);
  };
  return (
    <>
      <div className="c-ServiceCartePage">
        {showModal && selectedContent && (
          <CollapsingContent
            message={message}
            setDestination={setDestination}
            markers={[selectedContent]}
            closeModal={closeModal}
          />
        )}
        <div className="c-ServiceCartePage__SearchMapContainer">
          <SearchMap
            setMarkers={setMarkers}
            fetchGeolocation={fetchGeolocationWithAutoUpdate}
            setSelectedAddress={setSelectedAddress}
            error={error}
            disable={disable}
          />
        </div>
        <div className="c-ServiceCartePage__ContentMapContainer">
          {(geoLocation || selectedAddress) && (
            <ContentMap
              contents={data[0].dropOffMaps
                .filter(removeNulls)
                ?.map((content) => {
                  return {
                    infoId: content.id,
                    infoPicto: content.picto,
                    infoPictoName: content.pictoName,
                    infoName: content.name,
                    infoAddress: content.address,
                    infoPostal: content.postal,
                    infoDistance: content.distanceText,
                    infoLat: content.lat,
                    infoLng: content.lng,
                    infoMustKnow: content.mustKnow,
                    infoTime: content.time,
                    infoFiles: content.files,
                    infoCollectGender: content.collectGender,
                  } as IContentData;
                })}
              onContentClick={(content, message) =>
                handleContentClick(content, message)
              }
              selectedMarkerId={selectedMarkerId}
              showModal={showModal}
            />
          )}
        </div>
        <div className="c-ServiceCartePage__MarkerFilterContainer">
          <MarkerFilterMap
            setSelectedFilter={setSelectedFilter}
            markers={filters.filter(removeNulls).map((marker) => {
              return {
                name: marker?.name,
                picto: marker.picto,
                count: marker?.count,
              } as IFilterData;
            })}
            pavQueryParam={pavQueryParam}
          />
        </div>
        <div className="c-ServiceCartePage__LayersMapContainer">
          <LayersMap
            markers={data[0].dropOffMaps}
            position={checkPosition()}
            setIsMapLoaded={setIsMapLoaded}
            destination={destination}
            onMarkerClick={onMarkerClick}
            selectedMarkerId={selectedContent?.infoId}
            showModal={showModal}
          />
        </div>
      </div>
    </>
  );
}
