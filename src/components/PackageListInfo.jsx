
import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./PackageListInfo.css"

const PackageListInfo = (props) => {

    let { placeData, coordinates } = props;
   
    const [showDetails, setShowDetails] = useState(false);
    const [mockedPrice, setMockedPrice] = useState(null);    
    const [mockedAvailableSpots, setMockedAvailableSpots] = useState(0);
    
    const redirectParkingDetails = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
      setMockedPrice(getRandomNumber(1, 15));     
      setMockedAvailableSpots(getRandomNumber(0,300));
    },[])

    return (
        <Card style={{ cursor: "pointer" }} onClick={redirectParkingDetails}>
            <Card.Body>
                <Row style={{ padding: '14px' }}>
                    <Col lg={3}>
                        {/* <img style={{ width: 96, height: 96 }} src={image}></img> */}
                        {
                            placeData?.photos &&
                            <img style={{ width: 96, height: 96 }} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${placeData?.photos[0].photo_reference}&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`} alt="Place Photo" />
                        }
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={6} style={{ lineHeight: '40px' }}>
                        <div>{placeData.name} </div>
                        <div className="bold-text" style={{fontSize:'large'}}>{mockedAvailableSpots} Available Spots</div>
                        <div className="bold-text">{placeData.distance}</div>
                        <div><img style={{ width: 20, height: 20 }} src="/images/star.png"></img> {placeData.rating} ({placeData.user_ratings_total} ratings) </div>
                        <div>{placeData.duration}</div>
                    </Col>
                    <Col lg={2} style={{textWrap:'nowrap'}}>
                        ${mockedPrice}/hr
                    </Col>
                </Row>
                <Row style={{ display: showDetails ? 'flex' : 'none', borderTop: '1px solid rgba(0, 0, 0, 0.175)', lineHeight: '40px', padding: '15px' }}>
                    <Col lg={12}>
                        {
                            placeData?.photos &&
                            <img style={{ width: '100%', height: '100%' }} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeData?.photos[0].photo_reference}&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`} alt="Place Photo" />
                        }
                    </Col>
                </Row>
                <Row style={{ display: showDetails ? 'flex' : 'none', lineHeight: '40px', padding: '15px' }}>
                    <Col lg={12}>

                        <div className="add-title"> {placeData.name}<span className="bold-text">({placeData.duration})</span> </div>
                        <div className="bold-text"> {placeData.address}</div>
                        <div>{placeData.business_status}</div>
                        {
                            placeData.opening_hours &&
                            <div>{placeData.opening_hours.open_now ? 'Avaiable Now' : 'Closed'}</div>
                        }
                        <div className="bold-text"><img style={{ width: 20, height: 20 }} src="/images/star.png"></img> {placeData.rating} ({placeData.user_ratings_total} ratings)</div>
                        
                        
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default PackageListInfo;
