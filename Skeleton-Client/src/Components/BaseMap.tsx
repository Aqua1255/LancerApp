
import React, {useEffect, useState} from "react";
import L, {control, marker} from 'leaflet';
import './BaseMap.css'
import {Blue6Data, getBlue6s} from "./Blue6API";
import {LatLongFromMGRSstring} from "../mgrsConverter";



export const BaseMap = () => {

    const [locInputBlue6, setLocInputBlue6] = useState<Blue6Data[]>([]);
    // const [callSignInputBlue6, setCallSignInputBlue6] = useState<Blue6Data[]>([]);
    // const [pocInputBlue6, setPocInputBlue6] = useState<Blue6Data[]>([])

    useEffect( () => {
        getBlue6s()
            .then((data) => {
                setLocInputBlue6(data);
                const mymap = L.map('mapId').setView([47.056281, -122.612695], 8.7);

                {data.map((blueSixData) => {
                    console.log('Here is my current Blue6 id ', blueSixData.id)
                    const convertedGrids = LatLongFromMGRSstring(blueSixData.locInput)
                    const marker = L.marker(convertedGrids).addTo(mymap);
                    marker.bindPopup(blueSixData.callSignInput +'</br>'+blueSixData.pocInput)
                }, []);}





                // const marker = L.marker([47.056281, -122.612695]).addTo(mymap);
                //
                //
                // marker.bindPopup("<b>JBLM</b><br>America's Joint Base!</br>").openPopup();


                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    maxZoom: 18,
                    tileSize: 512,
                    zoomOffset: -1,
                }).addTo(mymap);
            })
            .catch(() => {
                console.error('blue6LocInput data transfer didnt work')
            })
    },[]);

    useEffect(() => {



        }, [])

    return (
        <>

            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                  crossOrigin=""
            />

            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                    crossOrigin="">
            </script>
            <div className="map-wrapper">
            <div id="mapId" className="jblm-map"></div>
            </div>





            {/*<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>*/}
            {/*    <TileLayer*/}
            {/*        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
            {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*    />*/}
            {/*    <Marker position={[51.505, -0.09]}>*/}
            {/*        <Popup>*/}
            {/*            A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*        </Popup>*/}
            {/*    </Marker>*/}
            {/*</MapContainer>*/}

        </>
    )}
