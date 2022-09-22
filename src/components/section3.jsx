import React, { Component } from 'react'
import '../css/section3.css'

export default class section3 extends Component {
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
        <div className='mt-3'>
        <div className='navbar ps-3 pe-3'>
            <div className='navbar w-100 ps-5 pe-5'>
                <div>
                    <span id='text-opacity' className='fs-1'>Tavsiya etilgan</span>
                    <span className='ms-3 fw-semibold'>494 mahsulotlar</span>
                </div>
                <div>
                    <a id='under-line' className='fw-semibold' href="">Barchasi</a>
                </div>
            </div>

        <section class="carousel-wrapper">
          <button type="button" class="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
            <i class="fas fa-chevron-left fs-5"></i>
          </button>
          <section class="carousel1 mt-3">
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5C0cb5d6ec3d049c5988aef231.jpg&w=1920&q=75" alt="Ballu isitgich" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">20 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Ballu BFH/S-10 isitgichi</span>
                </center>
                <center>
                  <s className='text-muted'>318 000</s><span className='fs-4 text-warning fw-semibold ms-3'>254 400 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>26 924</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%5Call%5C045d5b0f0f28a677eb886461.jpg&w=1920&q=75" alt="Isitgich Electrolux" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">20 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Isitgich Electrolux EOH/M-5221N</span>
                </center>
                <center>
                  <s className='text-muted'>1 040 000</s><span className='fs-4 text-warning fw-semibold ms-3'>832 000 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>88 053</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FHmgBSRRMElb5yCBrZMdtaeEtC4h1ho2f8qklP3qG.jpg&w=1920&q=75" alt="Suv Isitgich Shivaki" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">25 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Suv Isitgich Shivaki SHD WH...</span>
                </center>
                <center>
                  <s className='text-muted'>2 309 500</s><span className='fs-4 text-warning fw-semibold ms-3'>1 732 100 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>183 313</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FZpXXdpXvKBJvO9JbdqfqLaCSpVBioHCjv1pQiqrK.jpg&w=1920&q=75" alt="Gaz Plitasi Shivaki" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">25 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Gaz Plitasi Shivaki 6404-G</span>
                </center>
                <center>
                  <s className='text-muted'>3 743 800</s><span className='fs-4 text-warning fw-semibold ms-3'>2 807 800 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>297 158</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F8N3LRv9ovyc1ZcQi5oLFX6DzurH1uCx9TV2Q3Gkw.jpg&w=1920&q=75" alt="Yarim Avtomat Kir yuvish mashinasi Artel" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">30 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Yarim Avtomatik Kir Yuvish M...</span>
                </center>
                <center>
                  <s className='text-muted'>2 006 000</s><span className='fs-4 text-warning fw-semibold ms-3'>1 404 200 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>148 611</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FXadGjvFJUwYzzyaIaQu3nYGWG6baIAgiIg1D4mZ6.jpg&w=1920&q=75" alt="Dub Bo'ron Shivaki" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">25 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Dubbo'ron Shivaki 1160 Rapi...</span>
                </center>
                <center>
                  <s className='text-muted'>1 454 300</s><span className='fs-4 text-warning fw-semibold ms-3'>1 044 400 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>115 432</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F7HmH07MoPDHuAqR8xCsnCddTqISNHyPz4RqorZH0.jpg&w=1920&q=75" alt="Isitgich ART-OH-1337" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">30 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Isitgich ART-OH-1337</span>
                </center>
                <center>
                  <s className='text-muted'>1 505 000</s><span className='fs-4 text-warning fw-semibold ms-3'>1 053 500 <span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>111 495</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FmODRHxQPeK8puJdTVmqXEIz318H1Q8Tdj2dxpHLD.jpg&w=1920&q=75" alt="Oshxona Tarozisi" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">25 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Oshxona Tarozisi Shivaki SH-E...</span>
                </center>
                <center>
                  <s className='text-muted'>390 000</s><span className='fs-4 text-warning fw-semibold ms-3'>292 500<span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>30 956</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FUMEKygCgxqGKnZdpR2LvX5M88EesYjLwBUbYZGnG.png&w=1920&q=75" alt="Gaz Plitasi Artel" /></a>
              <div>
                <div className='navbar'>
                  <div id='fav-blue' className='w-50'>
                    <center className="fw-normal text-white">30 % Chegirma</center>
                  </div>
                  <div className='bg-warning w-50'>
                    <center className="fw-normal text-white">Tavsiya etilgan</center>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Gaz Plitasi Artel Moderno I64...</span>
                </center>
                <center>
                  <s className='text-muted'>2 575 000</s><span className='fs-4 text-warning fw-semibold ms-3'>1 802 500<span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>190 764</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FPU6EgZYyBxepPBR3cFF9Kx3nXGq0EXG0NlWNmbfN.jpg&w=1920&q=75" alt="Instax Mini 8" /></a>
              <div>
                <div className='bg-warning w-100'>
                  <center className="fw-normal text-white">Tavsiya etilgan</center>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Instax Mini 8</span>
                </center>
                <center>
                  <span className='fs-4 text-warning fw-semibold ms-3'>1 830 800<span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>114 702</span> so'm x 12 oy</span>
                </center>
              </div>
            </div>
            <div class="carousel-item1 bg-white">
              <a href=""><img width="260px" src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FMM0TDj4XpcdZrCmLebyT2P0Y5hLuK9gHyjpM8Fh0.jpg&w=1920&q=75" alt="Radio Soat Sony" /></a>
              <div>
                <div className='bg-warning w-100'>
                  <center className="fw-normal text-white">Tavsiya etilgan</center>
                </div>
              </div>
              <div className='bg-white'>
                <center>
                  <span id='under-line' className='opacity-75 fw-semibold'>Radio Soat Sony ICF-C1T</span>
                </center>
                <center>
                  <span className='fs-4 text-warning fw-semibold ms-3'>418 000<span className='fs-6'>so'm</span></span>
                </center>
              </div>
              <div id='bg-color'>
                <center className='pt-1 pb-1'>
                  <span id='text-color' className='fw-semibold'><span className='fs-5'>44 238</span> so'm x 12 oy</span>
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
