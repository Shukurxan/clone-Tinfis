import React, { Component } from 'react'
import "../css/nav2.css"

export default class nav2 extends Component {
  render() {
    return (
      <div id='last-nav' className='bg-white pb-3'>
        <div className='row container-fluid'>
          <div className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <a className='text-decoration-none opacity-75' href="">
              <img id='sm-img' className='img-fluid' src="assets/catalogBlack.svg" alt="" />
              <span id='sm-span1' className='text-dark ms-2 fw-semibold'>Kategoriyalar</span>
            </a>
          </div>

          <div className="col-sm-9 col-md-9 col-lg-7 col-xl-7 d-flex justify-content-between">
            <a id='hover' href="">
              <img id='img1' className='img-fluid' src="assets/percent.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Aksiyalar</span>
            </a>
            <a id='hover' href="">
              <img id='img1' className='img-fluid' src="assets/magazin.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Do'konlar</span>
            </a>
            <a id='hover' href="">
              <img id='img1' className='img-fluid' src="assets/star.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Brendlar</span>
            </a>
            <span id='unhover'>
              <img id='img1' className='img-fluid' src="assets/airplane.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Avia chiptalar</span>
            </span>
            <span id='unhover'>
              <img id='img1' className='img-fluid' src="assets/food.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Taomlar</span>
            </span>
            <span id='unhover'>
              <img id='img1' className='img-fluid' src="assets/flower.svg" alt="" />
              <span id='sm-span' className='text-muted ms-2 fw-normal'>Gullar</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
