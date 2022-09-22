import React, { Component } from 'react'
import '../css/section2.css'

export default class section2 extends Component {
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
                <div className='navbar w-100 ps-5 pe-5'>
                    <div>
                        <span id='text-opacity' className='fs-1'>Mashhur mahsulotlar</span>
                        <span className='ms-3 fw-semibold'>360 mahsulotlar</span>
                    </div>
                    <div>
                        <a id='under-line' className='fw-semibold' href="">Barchasi</a>
                    </div>
                </div>

            <section class="carousel-wrapper">
              <button type="button" class="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <i class="fas fa-chevron-left fs-5"></i>
              </button>
              <section class="carousel1 mt-5">
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Ca22d275e21d5bd0312cebc2c.jpg&w=1920&q=75" alt="Sport shortiklari" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Sport shortiklari</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>249 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>26 352</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Ca4733eefd87ccc8595f74fb6.jpg&w=1920&q=75" alt="Tana himoyasi" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Tana himoyasi</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>700 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>74 083</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5C78ca94716bd8714f1e7f935c.jpg&w=1920&q=75" alt="Darvozabon qo'lqoplari" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Darvozabon qo'lqoplari</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>300 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>31 750</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1 bg-white">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Ca8c701fcf2889005cc2c90ed.jpg&w=1920&q=75" alt="USB Flesh drive" /></a>
                  <div id='fav-blue' className='mt-own'>
                    <center className="fw-semibold text-white">8 % Chegirma</center>
                  </div>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>USB Flash Drive Kingston DTSE9...</span>
                    </center>
                    <center>
                      <s className='text-muted'>86 000</s><span className='fs-4 text-warning fw-semibold ms-3'>79 100 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>8 381</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5C80c2e3ce68a6f620878daa71.jpg&w=1920&q=75" alt="Shinoprovod" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Shinoprovod</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>155 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>16 404</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Ca269cd3eae392500aa4ae819.jpg&w=1920&q=75" alt="Elektr vilkalari" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Elektr vilkalari</span>
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
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FgrPL8GCBNfWrWX2UUbN9pvgHQ7GAWrkESccXceAS.jpg&w=1920&q=75" alt="Paketchali choy Golden ceylon" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Paketchali Choy Golden Ceylon</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>35 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>3 704</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Cb92eca262ae9d7a918fab6b1.jpg&w=1920&q=75" alt="Unitaz" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Unitaz</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>2 200 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>232 833</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Cea84109d5a98901597ae123a.jpg&w=1920&q=75" alt="Chang'i botinkalari" /></a>
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Chang'i botinkalari NN 75</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>2 990 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>316 441</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1">
                  <img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5C5ac4ca0acba029381307ada4.jpg&w=1920&q=75" alt="Yakka kurash kamari" />
                  <div className='bg-white pb-1'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>Yakka kurash kamari</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>35 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>3 704</span> so'm x 12 oy</span>
                    </center>
                  </div>
                </div>
                <div class="carousel-item1 bg-white">
                  <img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5Cffddb4e01fffb0b2e191ce6b.jpg&w=1920&q=75" alt="HDD 4000 GB USB" />
                  <div className='bg-white pb-1 mt-sm-img'>
                    <center>
                      <span id='under-line' className='opacity-75 fw-semibold'>HDD Trnscend 4000 GB USB...</span>
                    </center>
                    <center>
                      <span className='fs-4 text-warning fw-semibold'>1 757 000 <span className='fs-6'>so'm</span></span>
                    </center>
                  </div>
                  <div id='bg-color'>
                    <center className='pt-1 pb-1'>
                      <span id='text-color' className='fw-semibold'><span className='fs-5'>185 949</span> so'm x 12 oy</span>
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
