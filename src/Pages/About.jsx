import React from 'react'
import Banner from '../Components/Banner'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='about-container'>
      <Banner/>
        <h1 className="about-title title">About Us</h1>
      <div className="about-section">
      <div className="aboutus-left">
        <div className="about-left-content">
        <h1>Together, We Innovate Law</h1>
        <p>Exchange Legal Services started its operation in late 2022. The firm was founded by Mr. Ben Veerapen, a qualified Solicitor of the Supreme Court of England and Wales, and co-partner Hrushi Punjani.</p>
        </div>
      </div>
      <div className="aboutus-right">
        <div className="about-rightimg">
            <img src={assets.HeroBG} alt="" />
        </div>
      </div>
      <div className="about-left-bottom">
        <div className="about-bottom-img">
            <img src={assets.HeroBG} alt="" />
        </div>
      </div>
      </div>
      <div className="process-container">
        <h1>Process</h1>
        <div className="process-section">
            <div className="process-left">
                <div className="process-left-content">
                    <p>At our firm, teamwork and collaboration are at the heart of what we do. We unite a diverse team of legal experts, each bringing unique skills and perspectives to the table. This dynamic synergy enables us to craft bespoke legal solutions that meet your needs perfectly. By harnessing the collective expertise of our team, we provide holistic advice and develop comprehensive strategies, ensuring we can tackle even the most complex cases with confidence and creativity.</p>
                </div>
            </div>
            <div className="process-right">
                <div className="process-right-content">
                    <div className="process-steps">
                        <p>1</p>
                        <p>Understanding Your Unique Needs</p>
                    </div>
                    <div className="process-steps">
                        <p>2</p>
                        <p>Using Comprehensive Expertise</p>
                    </div>
                    <div className="process-steps">
                        <p>3</p>
                        <p>Unified Strategy for Customised Solutions</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="our-values-container">
        <h1 className='title'>Our Values</h1>
        <div className="our-values-section">
            <div className="our-values-card">
                <div className="ourvalue-card-img">
                    <img src={assets.sample} alt="" />
                </div>
                <div className="ourvalue-card-content">
                    <h2>Teamwork and Collaboration</h2>
                </div>
            </div>
            <div className="our-values-card card2">
                <div className="ourvalue-card-img">
                    <img src={assets.sample} alt="" />
                </div>
                <div className="ourvalue-card-content">
                    <h2>Open Communication</h2>
                </div>
            </div>
            <div className="our-values-card card3">
                <div className="ourvalue-card-img">
                    <img src={assets.sample} alt="" />
                </div>
                <div className="ourvalue-card-content">
                    <h2>Intregrity and Professionalism</h2>
                </div>
            </div>
            <div className="our-values-card card4">
                <div className="ourvalue-card-img">
                    <img src={assets.sample} alt="" />
                </div>
                <div className="ourvalue-card-content">
                    <h2>Innovation and Creativity</h2>
                </div>
            </div>
        </div>
      </div>
      <div className="our-journey">
        <div className='journey-title'>
            <h1>Our Journey</h1>
            <p></p>
        </div>
        <div className="journey-section">
            <div className="our-journey-path">
                <img src={assets.journey} className='journey-path-img' alt="" />
            </div>
            <div className="journey-content">
                <div className="journey-card1 card">
                    <div className="journey-year">
                        <h2>2020</h2>
                    </div>
                    <div className="journey-text">
                        <p>Ben Veerapen qualified as a solicitor in England and Wales</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
