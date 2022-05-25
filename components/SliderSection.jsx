import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Mousewheel, EffectCards } from 'swiper'
import SliderCard from './SliderCard'
import styles from '../styles/SliderSection.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import { projects } from '../lib/projects'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


function SliderSection() {
  const [swiper, setSwiper] = React.useState()
  const prevRef = React.useRef()
  const nextRef = React.useRef()

  React.useEffect(() => {
    if (swiper) {
      console.log('Swiper instance:', swiper)
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])

  return (
    <>
      <Default>
        <div className={styles.caseStudy}>
          <h1>Recent Work</h1>
          <div className={styles['swiper-button']} ref={nextRef}>
            <img src={'./nav-arrow.png'} />
          </div>
        </div>
        <section className={styles.sliderSection}>
          <Swiper
            className={styles.swiper}
            effect="cards"
            modules={[Navigation, Pagination, A11y, Mousewheel]}
            loop
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            onSwiper={setSwiper}
            spaceBetween={80}
            slidesPerView={2}
            
          >
            {
              projects.map((project, index) => {
                
                const projectTitleColor = index % 2 != 0 ? '#EDAFC3' : '#34FFF6'

                return (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <h1 
                    style={{ color: projectTitleColor, width:"70%", marginLeft: "auto", marginRight:"auto", marginTop:"10%", textAlign:"center"}}
                    >{project.name}
                    </h1>
                    <p
                      style={{
                        width:"75%",
                        marginBottom: '4em',
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: '2em',
                        fontSize: '12px',
                        fontWeight: '600',
                      }}
                    >
                      {project.about}
                    </p>
                    <SliderCard projectImage={project.image} />

                    <div style={{marginTop: "45px", textAlign:"center"}}>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                     <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                       {project.tags1}
                     </p>
                     </div>
                     <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags2}
                      </p>
                    </div>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags3}
                      </p>
                    </div>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags4}
                      </p>
                    </div>
                    </div>
                  </SwiperSlide>
                  
                )
              })}
          </Swiper>
        </section>
      </Default>
      <Mobile>
        <div className={styles.caseStudy}>
          <h1>Recent Work</h1>
          <div className={styles['swiper-button']} ref={nextRef}>
            <img src={'./nav-arrow.png'} />
          </div>
        </div>
        <section className={styles.sliderSection}>
          <Swiper
            className={styles.swiper}
            effect="cards"
            modules={[Navigation, Pagination, A11y, Mousewheel]}
            loop
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            onSwiper={setSwiper}
            spaceBetween={80}
            slidesPerView={1}
            
          >
            {
              projects.map((project, index) => {
                
                const projectTitleColor = index % 2 != 0 ? '#EDAFC3' : '#34FFF6'

                return (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <h1 style={{ color: projectTitleColor, width:"90%", marginLeft: "auto", marginRight:"auto", marginTop:"0%", textAlign:"center", fontSize: "16px", marginBottom: "-20px"}}
                    >{project.name}
                    </h1>
                    <p
                      style={{
                        width:"95%",
                        marginBottom: '4em',
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: '2em',
                        fontSize: '12px',
                        fontWeight: '300',
                        textAlign: 'center',
                        fontFamily: 'Roboto'
                      }}
                    >
                      {project.about}
                    </p>
                    
                    <SliderCard projectImage={project.image} />
                    <div style={{marginTop: "45px", textAlign:"center"}}>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                     <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                       {project.tags1}
                     </p>
                     </div>
                     <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags2}
                      </p>
                    </div>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags3}
                      </p>
                    </div>
                    <div style={{borderRadius:"15px", width: "20%", height:"30px", backgroundColor:"grey", padding:"2px", display:"inline-block", marginLeft: "2%", marginRight:"2%", position: "relative", top: "-25px"}}>
                      <p style={{color: "white", fontSize:"8px", textAlign: "center"}}>
                        {project.tags4}
                      </p>
                    </div>
                    </div>
                    
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </section>
      </Mobile>
    </>
  )
}

export default SliderSection
