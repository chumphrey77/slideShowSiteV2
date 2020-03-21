import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from '../../../Components/Slides';
import im1 from './../../../Components/pics/_DSC4395.png';
import StdImage from '../../../Components/StdImage';
import Carousel from 'react-bootstrap/Carousel';
import MonthBtnGrp from '../../../Components/MonthBtnGrp';

const DecEighteen = () => {
    return (
        <React.Fragment>
            <MonthBtnGrp year='2020'/>
            <Slides>
                <Carousel.Item>
                    <StdImage
                        imagePath={im1}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Slides>
        </React.Fragment>
    )
}
export default DecEighteen


