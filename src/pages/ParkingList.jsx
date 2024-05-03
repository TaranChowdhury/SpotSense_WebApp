// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import ParkingCarousel from "../components/ParkingCarousel";
import GrowthInfo from "../components/GrowthInfo";
import Footer from "../components/Footer";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
// import GoogleMapReact from 'google-map-react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import "./ParkingList.css"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import PackageListInfo from "../components/PackageListInfo";

const libraries = ['places'];
const mapContainerStyle = {
  width: '60vw',
  height: '100vh',
  border: '1px solid darkgray',
  borderRadius: '20px'
};

const ParkingList = () => {
  const [placeData, setPlaceData] = useState([]);
  const [coordinates, setCoordinates] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0',
    libraries,
  });

  const [inputValue, setInputValue] = useState(sessionStorage.getItem('zipCode') ?? '');

  useEffect(() => {

    let zipCode = sessionStorage.getItem('zipCode');

    if (zipCode !== "") {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`)
        .then(response => response.json())
        .then(data => {
          // Extracting latitude and longitude from the response
          const { lat, lng } = data.results[0].geometry.location;
          console.log(`${lat},${lng}`);
          setCoordinates({ lat, lng });
          getPlacesData(lat, lng)
        })
        .catch(error => {
          console.error('Error fetching coordinates:', error);
        });
    }



  }, []);


  const submitZipCode = (event) => {
    if (event.key === 'Enter') {
      if (inputValue !== "") {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputValue}&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`)
          .then(response => response.json())
          .then(data => {
            // Extracting latitude and longitude from the response
            if(data.results.length > 0){
              const { lat, lng } = data.results[0].geometry.location;
              setCoordinates({ lat, lng });
              getPlacesData(lat, lng);
            }
            else{
              alert('Please verify zip code');
              setCoordinates(null);
              setPlaceData([]);
            }

          })
          .catch(error => {
            console.error('Error fetching coordinates:', error);
          });
      }

    }
  }

  const getPlacesData = async (lat, lng) => {
    const placesResponse = await fetch(
      `http://localhost:3001/places?lat=${lat}&lng=${lng}`
    );
    const placesData = await placesResponse.json();
    debugger;
    console.log(placesData);
    setPlaceData(placesData.results);
  }

  const handleChange = (event) => {
    sessionStorage.setItem('zipCode', '');
    setInputValue(event.target.value);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const markerIconUrl = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  return (
    <div className="body-container">
      <div className="parking-list">
        <Header />

        <Row>
          <Col lg={4} className="parking-list-details">
            <div className="list-content">
              <h3 className="text-center">Reserve your spot</h3>
              <h4>Single Booking</h4>
              <div className="list-search">
                <span>Book Parking Near</span>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                  <Form.Control
                    placeholder="Serach Address"
                    aria-label=""
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    onKeyDown={submitZipCode}
                    value={inputValue}
                  />
                </InputGroup>
              </div>
              {placeData && placeData.map((place, index) => (
                <PackageListInfo placeData={place} coordinates={coordinates} key={index} />
              ))}

            </div>
          </Col>
          <Col lg={8} className="d-none d-sm-block">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={14}
              center={coordinates}
            >
              {placeData && placeData.map((place, index) => (
                <MarkerF position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }}
                  key={index}
                  icon={{
                    url: markerIconUrl,
                    scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the marker icon
                  }}
                />
              ))}

            </GoogleMap>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default ParkingList;
