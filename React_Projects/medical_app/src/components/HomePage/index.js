import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useState, useContext, useMemo} from 'react'

import {FaGreaterThan} from 'react-icons/fa'

import Header from '../Header'
import AllMedicinesList from '../AllMedicinesList'

import {SlidersListContext} from '../../App'
import {MedicinesContext} from '../../App'

import './index.css'



function HomePage(){
    const [searchInput, setSearchInput] = useState("")

    const onChangeSearchInput = (text) => setSearchInput(text) 

    
    const {medicinesList, setMedicines} = useContext(MedicinesContext)
    const filteredList = useMemo(() => medicinesList.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())), [searchInput, medicinesList])

    const slidersList = useContext(SlidersListContext)

    var settings = {
            customPaging: function(i) {
              return (
                <div className="navigation-button">
                    <p className="navigation-button-text1">{slidersList[i].text1}</p>
                    <p className="navigation-button-text2">{slidersList[i].text2}</p>
                </div>
              );
            },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var mobileSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <>
    <Header onChangeSearchInput={onChangeSearchInput} />
    <div className="main-container">

<div className="slider-main-container">
    <div className="slider-inner-container">
<Slider {...settings} dotsClass="slick-dots customized-dots" className="slider-container">
    {slidersList.map((item, index) => <img src={item.img_url} alt={`Slide ${index}`} className="slide-image" />)}
</Slider>
</div>
</div>

<div className="slider-main-container-mobile">
    <div className="slider-inner-container-mobile">
        
<Slider {...mobileSettings}  className="slider-container-mobile">
    {slidersList.map((item, index) => <img src={item.img_url} alt={`Slide ${index}`} className="slide-image-mobile" />)}
</Slider>
</div>
</div>

<div className="upload-help-container">
    <div className="sub-container">
        <div className="text-container">
        <p className="sub-container-heading">Upload for Order</p>
        <p className="sub-container-note">Get a call back</p>
        </div>
        <FaGreaterThan />
    </div>
    <div className="sub-container">
        <div className="text-container">
        <p className="sub-container-heading">Need help with Ordering</p>
        <p className="sub-container-note">Call 040 67000 6700</p>
        </div>
        <FaGreaterThan />
    </div>
</div>

<AllMedicinesList medicinesList={filteredList} />
    </div>
       </>
    )
}

export default HomePage