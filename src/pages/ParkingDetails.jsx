// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import ParkingCarousel from "../components/ParkingCarousel";
import GrowthInfo from "../components/GrowthInfo";
import Footer from "../components/Footer";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import "./ParkingDetails.css"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const ParkingDetails = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0',
    libraries,
  });

  const navigate = useNavigate();

  const redirectParkingDetails = () => {
    navigate('/parkingdetails');
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }


  return (
    <div className="body-container">
      <div className="parking-details">
        <Header />

        <Row>
        <img src="/images/image-2@2x.png"></img>
          <Card style={{ cursor: "pointer" }} onClick={redirectParkingDetails}>
            <Card.Body>
              <Row>
                <Col lg={3}>
                  <img style={{ width: 96, height: 96 }} src="/images/image-2@2x.png"></img>
                </Col>
                <Col lg={7}>
                  <div> 809 E Washington St. - Lot</div>
                  <div>4.8</div>
                  <div>13 min</div>
                </Col>
                <Col lg={2}>
                  $9
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default ParkingDetails;
