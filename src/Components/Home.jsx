import React from 'react'
import Navbar from './Navbar'

import { FaPlane, FaLock, FaHeadset, FaSearch, FaHeart, FaEye, FaStar, FaStarHalf, FaMapMarkedAlt, FaEnvelope, FaPhoneAlt,
FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
 
const Home = () => {
  const swiperOptionsOne = {
    breakpoints: {
      "0": {
        slidesPerView: 1,
      },
      "768": {
        slidesPerView: 2,
      },
      "1024": {
        slidesPerView: 3,
      },
    },
    loop:true
  };
   const swiperOptionsTwo = {
     breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween:10,
      },
      "450":{
        slidesPerView:2,
        spaceBetween:10,

      },
      "768": {
        slidesPerView: 3,
        spaceBetween:10,
      },
      "1024": {
        slidesPerView: 4,
    
      },
    },
    loop:true,
    conteredSlides:true,
    spaceBetween:10,
   }
   const swiperOptionsThree = {
     breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween:10,
      },
      "450":{
        slidesPerView:2,
        spaceBetween:10,

      },
      "768": {
        slidesPerView: 3,
        spaceBetween:10,
      },
      "1024": {
        slidesPerView: 4,
    
      },
    },
    loop:true,
    conteredSlides:true,
    spaceBetween:10,
   }
  return (
    <div className='home-container'>
      <Navbar/>
      <section className='home' id='home'>
         <div  className='row'>
          <div className='content'>
          <h3>upto 55% offers</h3>
          <p>If you’re an Engineering student and need a books, Books & Tales has great deals on a wide range of books. Shop for these books from top authors and avail hugely discounted prices  </p>
          <a href="\#" className='btn'>shop now</a>
          </div>
      
       

        <div className="swiper" id='topswiper2'>
             <Swiper  {...swiperOptionsOne}
                  watchSlidesProgress={true}
                  slidesPerView={3}
                  autoplay={{
                    delay:9500, 
                    disableOnInteraction:false,
                  }}
                   pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="book-list"
                    >
                 <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-1.png" alt="" /></SwiperSlide>
              </a>
                <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-2.png" alt="" /></SwiperSlide>
              </a>
              <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-3.png" alt="" /></SwiperSlide>
              </a>
              <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-4.png" alt="" /></SwiperSlide>
              </a>
              <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-5.png" alt="" /></SwiperSlide>
              </a>
             <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-6.png" alt="" /></SwiperSlide>
              </a>
             <a href="\#" className='swiper-slide'> 
              <SwiperSlide><img src="./image/book-7.png" alt="" /></SwiperSlide>
              </a>
               <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-8.png" alt="" /></SwiperSlide>
              </a>
             <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-9.png" alt="" /></SwiperSlide>
              </a>
             <a href="\#" className='swiper-slide'>
              <SwiperSlide><img src="./image/book-10.png" alt="" /></SwiperSlide>
              </a>
               </Swiper>
               <img className='stand' src="./image/stand.png" alt="" />
         </div>
          </div>
      </section>

       <section className='icons-container'>
        <div className='icons'>
          <i><FaPlane /></i>
          <div className='content'>
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>
         <div className='icons'>
          <i><FaLock /></i>
          <div className='content'>
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>
         <div className='icons'>
          <i><FaHeadset /></i>
          <div className='content'>
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
       </section>
        
        <section className='featured' id='featured'>
          <div className='heading'><span>featured books</span></div>
          <div className='swiper' id='topswiper'>
             <Swiper
             watchSlidesProgress={true}
             autoplay ={{
              delay:3500,
              disableOnInteraction:false
             }}
              modules={[Autoplay]}
              className="featured-slider"
              {...swiperOptionsTwo}
              >
              
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-1.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box' >
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-2.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-3.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-4.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-5.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-6.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                  <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-7.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className='box'>
                      <div className='icons'>
                        <a href="\#"><FaSearch /></a>
                        <a href="\#"><FaHeart /></a>
                        <a href="\#"><FaEye /></a>
                      </div>
                    </div>
                    <div className='image'>
                      <img src="./image/book-8.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>featured book</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                      <a href="\#" className='btn'>Add to cart</a>
                    </div>
                 </SwiperSlide>
               </Swiper>   
          </div>
        </section>   


        <section className='newsletter'>
          <form action="">
            <h3>subscribe for latest update</h3>
            <input type="email" placeholder='enter your email' className='box' />
            <input type="submit" value="subscribe" className='btn' />
          </form>
        </section>

        <section className='arrivals' id='arrivals'>
          <div className='heading'> <span>new arrivals</span></div>
            <div className='swiper'>
              <Swiper
             watchSlidesProgress={true}
             autoplay ={{
              delay:3500,
              disableOnInteraction:false
             }}
              modules={[Autoplay]}
              className="arrivals-slider"
              {...swiperOptionsTwo}
              >
                <SwiperSlide>
                  <a href="\#" className='box' >
                    <div className='image' >
                       <img src="./image/book-1.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-2.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-3.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-4.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-5.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-6.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-7.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-8.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image' >
                       <img src="./image/book-9.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>

               <Swiper
             watchSlidesProgress={true}
             autoplay ={{
              delay:3500,
              disableOnInteraction:false
             }}
              modules={[Autoplay]}
              className="arrivals-slider"
              {...swiperOptionsTwo}
              >
                <SwiperSlide>
                  <a href="\#" className='box' >
                    <div className='image' >
                       <img src="./image/book-1.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-2.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-3.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-4.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-5.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-6.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-7.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image'>
                       <img src="./image/book-8.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="\#" className='box'>
                    <div className='image' >
                       <img src="./image/book-9.png" alt="" />
                    </div>
                    <div className='content'>
                      <h3>new arrivals</h3>
                      <div className='price'>$15.99 <span>$20.99</span></div>
                    <div className='stars'>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStarHalf /></i>
                    </div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
        </section>


        <section className='deal'>
            <div className='content'>
              <h3>deal of the day</h3>
              <h1>upto 50% offers</h1>
               <p>
                  Checkout before this deal expires at midnight         
               </p>
               <a href="\#" className='btn'>shop now</a>
            </div>
            <div className='image'>
              <img src="./image/deal-img.jpg" alt="" />
            </div>
        </section>

        <section className='reviews' id='reviews'>
          <h1 className='heading'> <span>client's reviews</span></h1>
          <div className='swiper'>
             <Swiper
                watchSlidesProgress={true}
                autoplay ={{
                  delay:3500,
                  disableOnInteraction:false
                }}
                  modules={[Autoplay]}
                  className="reviews-slider"
                  {...swiperOptionsThree}
              >
                <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-3.png" alt="" />
                    <h3>Ragu</h3>
                    <p>
                      Customer Service is good. Greetings to customer and making the required Books to Customers is very good.
                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-5.png" alt="" />
                    <h3>Abhinav</h3>
                    <p>
                      I migrated to the online platform on Just books because I was finding it difficult to go to their libraries before closing time.
                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-4.png" alt="" />
                    <h3>Pooja</h3>
                    <p>
                      This book centre have large amount of a books. The engineering study material all semester books are available.                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
                
                 <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-2.png" alt="" />
                    <h3>marry</h3>
                    <p>
                      Best book store almost all books are available for prepartion of exam related or other books are available on reaonable price also.
                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-1.png" alt="" />
                    <h3>ujjwal</h3>
                    <p>
                      First of all it customer service is excellent. We get all author book for Mumbai University.People should try and best price.
                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className='swiper-slide box'>
                    <img src="./image/pic-6.png" alt="" />
                    <h3>Sidddhi</h3>
                    <p>
                     I love the product because it is very easy to find. The book are in really organized manner you can easily find the book you want.                    </p>
                    <div className='stars'>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStar/></i>
                      <i><FaStarHalf/></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>


          </div>
        </section>

        

        <section className='footer'>
          <div className='box-container'>
            <div className='box'>
              <h3>Our Location</h3>
              <a href="\#"><i><FaMapMarkedAlt /></i>India</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>USA</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Russia</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>France</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Japan</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Africa</a>
            </div>
             <div className='box'>
              <h3>Quick Link</h3>
              <a href="\#"><i><FaMapMarkedAlt /></i>Homendia</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Featured</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Arrivals</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Blogs</a>
            </div>
             <div className='box'>
              <h3>Extra Links</h3>
              <a href="\#"><i><FaMapMarkedAlt /></i>Account info</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Ordered items</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Privacy policy</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Payment method</a>
              <a href="\#"><i><FaMapMarkedAlt /></i>Our services</a>
            </div>
             <div className='box'>
              <h3>Contact Info</h3>
              <a href="\#"><i><FaPhoneAlt /></i>6354729012</a>
              <a href="\#"><i><FaPhoneAlt /></i>9842615368</a>
              <a href="\#"><i><FaEnvelope /></i>kavinhere33@Gmail.com</a>
              <img src="./image/worldmap.png" alt="" className='map' />
            </div>
          </div>
         
          <div className='share'>
            <a href="\#"><i><FaFacebookF /></i></a>
            <a href="\#"><i><FaTwitter /></i></a>
            <a href="\#"><i><FaInstagram /></i></a>
            <a href="\#"><i><FaLinkedinIn /></i></a>
          </div>
          <div className='credit'>created by <span>SRI KAVIN KUMAR</span> copyright ©2025| All rights reserved
          </div>
        </section>

    </div>
  )
}
export default Home; 
