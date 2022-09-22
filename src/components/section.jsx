import React, { Component } from 'react'
import "../css/section.css"
import { Link } from 'react-router-dom'

export default class section extends Component {
  render() {
    function scrollEv(leftArrow, rightArrow, carousel) {
      if (carousel.scrollLeft <= 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "block";
      }
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth - 1) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "block";
      }
    }
    
    function clicleftArrow(carousel, rectList) {
      let shiftScroll;
      for (let i = 0; i < rectList.length; i++) {
        if (carousel.scrollLeft > rectList[rectList.length - 1]) {
          shiftScroll = rectList[rectList.length - 1];
        } else if (
          carousel.scrollLeft > rectList[i] &&
          carousel.scrollLeft <= rectList[i + 2]
        ) {
          shiftScroll = rectList[i];
        }
      }
      carousel.scrollTo({
        left: shiftScroll,
        behavior: "smooth"
      });
    }
    
    function clickRight(carousel, rectList) {
      let shiftScroll;
      for (let i = 0; i < rectList.length; i++) {
        if (
          carousel.scrollLeft >= rectList[i] - 1 &&
          carousel.scrollLeft < rectList[i + 1]
        ) {
          shiftScroll = rectList[i + 1];
        }
      }
      carousel.scrollTo({
        left: shiftScroll,
        behavior: "smooth"
      });
    }
    
    function listRectCarousel(carouselNumber, carousels) {
      let divs = carousels[carouselNumber].getElementsByClassName("carousel-item1");
      let rectList = [];
      let rectGauche = carousels[carouselNumber].getBoundingClientRect().left;
    
      for (let i = 0; i < divs.length; i++) {
        let rect = divs[i].getBoundingClientRect();
        rectList.push(rect.left - rectGauche);
      }
    
      for (let i = rectList.length - 1; i >= 0; i--) {
        rectList[i] = rectList[i] - rectList[0];
      }
      return rectList;
    }
    
    function autoSlidePosLeft(carouselNumber, carousels, leftArrows) {
      let rectList = listRectCarousel(carouselNumber, carousels);
      leftArrows[carouselNumber].addEventListener("click", () => {
        clicleftArrow(carousels[carouselNumber], rectList);
      });
    }
    
    function autoSlidePosRight(carouselNumber, carousels, rightArrows) {
      let rectList = listRectCarousel(carouselNumber, carousels);
      rightArrows[carouselNumber].addEventListener("click", () => {
        clickRight(carousels[carouselNumber], rectList);
      });
    }
    
    window.onload = () => {
      let leftArrows = document.getElementsByClassName("left-arrow");
      let rightArrows = document.getElementsByClassName("right-arrow");
      let carousels = document.getElementsByClassName("carousel1");
    
      for (let i = 0; i < leftArrows.length; i++) {
        autoSlidePosLeft(i, carousels, leftArrows);
        window.onresize = () => {
          autoSlidePosLeft(i, carousels, leftArrows);
        };
      }
    
      for (let i = 0; i < rightArrows.length; i++) {
        autoSlidePosRight(i, carousels, rightArrows);
        window.onresize = () => {
          autoSlidePosRight(i, carousels, rightArrows);
        };
      }
    
      for (let i = 0; i < carousels.length; i++) {
        carousels[i].addEventListener("scroll", () => {
          scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
        });
      }
    
      for (let i = 0; i < carousels.length; i++) {
        scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
        window.onresize = () => {
          scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
        };
      }
    
      let toggleOverflow = document.getElementById("toggle");
      toggleOverflow.addEventListener("click", () => {
        for (let i = 0; i < carousels.length; i++) {
          carousels[i].classList.toggle("overflow");
          carousels[i].parentNode.classList.toggle("scrollbar-overflow");
        }
      });
    };
    return (
      <div className='mt-5'>
        <div className='navbar ps-3 pe-3'>
          <div>
            <span id='text-opacity' className='fs-1'>Yangi mahsulotlar</span>
            <span className='ms-3 fw-semibold'>296 mahsulotlar</span>
          </div>
          <div>
            <a id='under-line' className='fw-semibold' href="">Barchasi</a>
          </div>

            <section class="carousel-wrapper">
              <button type="button" class="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <i class="fas fa-chevron-left fs-5"></i>
              </button>
              <section class="carousel1 mt-5">
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F65bcXghTx7iYmvLTjfDshWmO2zeLleVpBiQoVHuD.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Oliy navli "Lazer" guruchi</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>25 300 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>2 677</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FEMuF70dvLrQF0H4LONq9MQZtSaCXnHVrHaMAOUHu.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Alanga Guruchi</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>15 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>1 587</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FyZdPBzduJm8IDeWWv2GfbCpzTpqbx3oFCwG1HKJY.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Devzira guruchi</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>27 600 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>2 921</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FyZ9vVwARkVh5qjACLBfopbPVgxBdzwztR0XugnGs.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Yasmiq</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>23 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>2 434</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FckrZMsN7ZlVFZetDoMndMYaEyR9a1EP18gPoote8.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Grechka</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>20 700 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>2 190</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FmdWqsHGfW1A5VV3WsUDEvSjFr451KCDHP01LRqdq.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Perlovka</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>8 100 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>857</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FWcNo2R1Gu9dQcHgEeYOFu1ixnH2kzlTVq86br4Zr.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Универсальная штукатурочная...</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>37 400 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>3 958</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FlH62fVR56hhC0m1nedofOLX5ZeG5ZWrxqXSkM38J.jpg&w=1920&q=75" alt="Working" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Gipsli shpatlyovka Satin-2</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>33 400 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>3 534</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FOzDC3NV0JKLUSp3vjNorQvqGShphOu3j2NWyeYdh.jpg&w=1920&q=75" alt="Holidays" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Декоративная штукатурка Rainc...</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>43 100 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>4 561</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FOjNiT2SuJafgxj6FtN9wWJsGvnRDxAobt47AOjDH.jpg&w=1920&q=75" alt="Holidays" />
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Наливной пол FLOOR LEVEL</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>51 200 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>5 418</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F7oUHXfmusRloizsz2yedS4F4IuDTPcPIKUj6vavb.jpg&w=1920&q=75" alt="Holidays" />
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Fasad shpatlyovkasi white facade</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>43 700 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>4 624</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
              </section>
              <button type="button" class="arrows right-arrow" aria-label="Arrow Right">
                <i class="fas fa-chevron-right fs-5"></i>
              </button>
            </section>          

        </div>
      </div>
    )
  }
}
