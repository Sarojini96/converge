// src/components/bootstrap-carousel.component.js
import React from "react";
import {MDBMask,MDBCardTitle,MDBBtn,MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBCol,MDBRow } from
    "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import Overlay from 'react-image-overlay'
import TestimonialCard from 'material-testimonial-card';

const HomePage = () => {
    return (
        <div>
                
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                                alt="First slide"
                            />
                        </MDBView>
                       
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                alt="Third slide"
                            />
                        </MDBView>
                
                    </MDBCarouselItem>
                    
                </MDBCarouselInner>
            </MDBCarousel>
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search for example Digital Marketing, Website Design, Cloud Security, etc." aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>  
                <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-left">
              <h2 style={{color:"#01579B"}}>
              <b>   Become A Digital Pro</b>
              </h2>
              <h2 style={{color:"#01579B",}}>
              <b> By Joining With Us</b>
              </h2>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-4">
        <MDBRow>
          
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br></br>        <br></br>


      </MDBContainer>

      <div className="auth-wrapper">
      <MDBRow end> 
      <img
                                className="d-block w-100"
                                src="/images/iStock-1018522474.jpg"
                            ></img>                 

                   <div className="auth-inner text-white">
            
         <h1>How Do We Do</h1>         </div>          
   </MDBRow>
     </div>
     <div size="fluid" className="auth-wrapper" style={{paddingRight:150,paddingLeft:150, paddingTop:100}}><img
                                className="d-block w-100"
                                src="/images/newsletter.png"
                            ></img>
                            <h1 className="auth-inner-news" style={{position:'absolute',left:250}}>Sign in to<br></br>Our Newsletter</h1>
                            </div>
      <MDBContainer><TestimonialCard
        name={"John Smith"}
        image={"/images/profile.png"}
        content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
        project={"Testimonial card"}
    /></MDBContainer>
      
      </div>
        
    );
}
 
export default HomePage;
