import React from 'react'
import './Banner.css'
import Button from '../../UI/Button/Button'
import FeatureBox from '../../UI/FeatureBox/FeatureBox'
import webApp from '../../../assets/Icons/Banner/website-content.svg'
import seo from '../../../assets/Icons/Banner/seo-tag.svg'
import coding from '../../../assets/Icons/Banner/coding.svg'
import immersive from '../../../assets/Icons/Banner/immersive.svg'

const FeaturesArray = [
  {
    title: "Web Application",
    subtitle: "Lorem Ipsum is simply",
    boxClass: "box-purple",
    svg: webApp
  },
  {
    title: "SEO",
    subtitle: "Lorem Ipsum is simply",
    boxClass: "box-green",
    svg: seo
  },
  {
    title: "AR/VR Solutions",
    subtitle: "Lorem Ipsum is simply",
    boxClass: "box-blue",
    svg: immersive
  },
  {
    title: "Mobile Applications",
    subtitle: "Lorem Ipsum is simply",
    boxClass: "box-orange",
    svg: coding
  }
]

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-top">
        <div className="container">
          {/* Hero Content */}
          <div className="row align-items-center ">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="banner-title">
                  Experienced <span className="highlight-blue">mobile and web</span> applications and website builders measuring.
                </h1>
                <p className="banner-desc">
                  KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
                </p>

                <div className="banner-actions">
                  <Button btnText="Contact us" className="bg-blue py-11 px-26 radius-6" />
                  <Button btnText="View more" className="bg-fff py-11 px-26 radius-6" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-image text-center position-relative">
                <div className="creative-shapes"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        <div className="container ">
          {/* Features Row */}
          <div className="features-container">
            <div className="row g-4 justify-content-center features-row align-items-center">
              {FeaturesArray.map((feature, index) => (
                <div className="feature-box-item" key={index}>
                  <FeatureBox
                    title={feature.title}
                    subtitle={feature.subtitle}
                    boxClass={feature.boxClass}
                    svg={feature.svg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Banner