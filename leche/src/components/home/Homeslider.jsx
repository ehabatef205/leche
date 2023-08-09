import React, { useEffect, useState } from 'react';
import './homeslider.css';
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from 'react-router-dom';
import * as Slider from '../../api/basis/slider'
import * as Images from '../../api/basis/image'

function Homeslider() {
  const title = "image";
  const [slider, setSlider] = useState([])
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [ind, setInd] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    Slider.getSliderImages().then(res => {
      setLoading(false)
      setSlider(res.data.response)
    })

    Images.getImages().then(res => {
      setLoading(false)
      setImages(res.data.response)
    })
  }
    , [title])

  const handleSlideClick = (index) => {
    console.log(`Slide ${index} clicked!`);
    navigate("/Productpage/" + slider[index].category_id)
  };

  const handleSelect = (index) => {
    setInd(index)
    console.log(`${index}`);
  };

  return (
    <div className=' d-flex justify-content-center '>
      <div
        className='d-flex flex-wrap '
        style={{
          height: 'fit-content',
          maxWidth: '1500px',

          marginTop: '3vw',
        }}
      >
        <div className='leftside col-12 col-lg-6'
          style={{
            height: '700px'
          }}>
          <div
            id="carouselExample"
            className="carousel slide w-100 h-100 "
            style={{ justifyContent: "center" }}
          >
            <div
              className="carousel-inner w-100  d-flex justify-content-center h-100"
            >
              <Carousel style={{
                height: '700px', width: "97%"
              }} interval={3000} onSelect={handleSelect}>
                {slider.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img style={{
                      height: '700px',
                      cursor: "pointer",
                      borderRadius: "10px",
                    }}
                      className='w-100 '
                      src={image.image}
                      alt={""}
                      onClick={() => handleSlideClick(ind)}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div
          className=' col-lg-6 col-12  d-flex flex-wrap rightside'
          style={{ height: '700px' }}
        >
          <div
            className='w-100 col-12'
            style={{ height: 'calc(50% + 38px)', marginBottom: '3%' }}
          >
            <img
              className='h-100 w-100'
              src={images[0]?.image}
              alt='Right Top Slide'
              style={{ borderRadius: "10px", }}
            />
          </div>
          <div
            className='col-12  d-flex flex-wrap'
            style={{ height: 'calc(50% - 60px)' }}
          >
            <div
              className='col-12 col-lg-6 h-100  leftsubside'
              style={{ width: 'calc(50% - 15px)', marginRight: '4%' }}
            >
              <img
                className='h-100 w-100'
                src={images[1]?.image}
                alt='Right Bottom Left Slide'
                style={{ borderRadius: "10px", }}
              />
            </div>

            <div
              className='col-12 col-lg-6 h-100 rightsubside'
              style={{ width: 'calc(50% - 15px)' }}
            >
              <img
                className='h-100 w-100'
                src={images[2]?.image}
                alt='Right Bottom Right Slide'
                style={{ borderRadius: "10px", }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeslider;