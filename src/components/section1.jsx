import React, { Component } from 'react'
import '../css/section1.css'

export default class section1 extends Component {
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
            <div className='ps-3 pe-3'>
                <div className='navbar ps-5 pe-5'>
                    <div>
                        <span id='fav-under-line' className='fs-1 fw-semibold opacity-75'>Mashhur do'konlar</span>
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
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/o8QbTLHgVibNDhMI5AWrE527jxLadVXMO4AfbJJ2.jpg" alt="Sony" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/khfiwE09hXeZxmYUDmUOxycBci2Js7WF3F0dyX6Q.png" alt="Saber" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/arLCysIUArGLNIrzYNlg13dF6eLZIcWYjKDN7eWB.jpg" alt="Kukmara" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/FSvbKf9IVRD7QxkdwcM1Ktdz1zOy1UpkHt5suKAK.jpg" alt="CAD" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/i0uZNQgqRT5qIrScQTVpbtjHpTdXGLMsBeieZ3iU.jpg" alt="Merci" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/RLMubEHJxRWyfjYkuVm9CLEqBsnj9Cx2QMEXkCOV.jpg" alt="Artel" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/9Fq5mrhq9qafI1wLRxHbEpZTjY27WxH0WfIY9Ce4.jpg" alt="Samsung" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/E5NCLOhQCmD9wGC8fEwbT7Jd60xytqVKBYEdGmP6.jpg" alt="MacBro" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/ANYOQbjJfkEsRCAMpAHMQsRElOZEFapwgxWEUNTq.jpg" alt="Shivaki" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/b0agP5s39Mmv24oKFTxxFYA9YAbQqOV8TeqtCltW.jpg" alt="Fujifilm" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/7oqcIrsWO7PuhmHu9KmBE8i5JHnvOrAFuNjRHLPT.jpg" alt="iSnan" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/NTdAgPkudebe9mafxDX2JhtlA2kLcmgyp2xPbida.jpg" alt="AvTech" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/95BOwXX6eHLDu0Zf7DSImSXt6q5UEqbsaMtmblNd.jpg" alt="Mechta" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/UBXYRwvJDGYPw2fBZoz3Htpjm832I9Ag3ciTLfjE.jpg" alt="JBL" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/aGMnZ0uSxLTfdMkxuyvv3vdzz2m1eDjzZComVLLG.jpg" alt="Megamix" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/r3h2rNvsdf7POeod9ir0D8wvnfcTL6r7C1TIYOVC.jpg" alt="Lenovo" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/zxrrXsmzibHllP0F5VLAQdvp8YyDqN8zpRIU1wxJ.jpg" alt="Drivia" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/urebc29YRsMI3JTlZJLjAeSTDJyuGj3PfapX2Qb8.jpg" alt="Zeytin" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/RV2HYfP6V4nLZ10szKkfaRNjP0fhu9zXsIXTOKVM.jpg" alt="AlFajr" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/MzRhrjvzL5ZUpsM0myT75OP0Fn7OqrBgfUlsmwKo.jpg" alt="ElitKom" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/IgkmigtG5Lhowjxf1OKOsaqYlKDj0D797vCIETmY.jpg" alt="HP" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/4O7tnwLthBMnaMjCPhd3F3GDGJly8Qk2qhsTlqye.jpg" alt="Elfort" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/AQzh4rR93RV65ZuB6j45RVAFICSHeS0JWPG6qaev.jpg" alt="Cougar" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/5knBZ4tyv79avxuomxz9Z4SZhb8aGb0dPccTfhlK.jpg" alt="Omio Dio" /></a>
                    </div>
                    <div class="carousel-item1">
                        <a href=""><img width="200px" src="https://back.tinfis.uz/public/uploads/all/bSeJQlOXn5dAP4ZFMJ4uXWigZ3CRUC9FrJyR5s4O.jpg" alt="Ezviz" /></a>
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
