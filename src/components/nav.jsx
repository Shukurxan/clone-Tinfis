import React, { Component } from 'react'
import "../css/nav.css"

export default class nav extends Component {
  render() {
    return (
      <div id='navBg' className='navbar'>
        <div className='container-fluid'>
            <div className='d-flex align-items-center ms-2'>
                <div>
                <span><i className='navnone fas fa-map-marker-alt text-warning ms-2 fs-5'></i></span>
                <span id='navText' className='navnone text-white ms-2'>Toshkent shahar, <span>Toshkent viloyati</span></span>
                </div>
                <div>
                <img id='imgfl' className='img-fluid' src="assets/navicon.svg" alt="" />
                <span id='navph' className='text-white ms-1'>+998 <span id='navph1'>71 209 03 33</span></span>
                </div>
            </div>
            <div className='d-flex align-items-center'>
              <span id='navph'><a className='text-decoration-none text-white fw-semibold' href="">Sotuvchining kabineti</a></span>
              <a id='navph2' className='text-decoration-none text-white' href=""><span><i class="far fa-question-circle text-warning fs-4"></i><span className='fw-semibold ms-2'>Yordam</span></span></a>
              <select id='selector' className='text-white fw-semibold'>
                <option className='text-dark fs-6 fw-normal' selected><a href="">UZ</a></option>
                <option className='text-dark fs-6 fw-normal'><a href="">RU</a></option>
              </select>
              <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa fa-bars icon text-warning ms-3"></i></span>
              
              <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className='offcanvas-header bg-warning'>
                  <h5 className='offcanvas-title" id="offcanvasScrollingLabel'>Tinfis</h5>
                  <button type="button" className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body'>
                  <div className='navbar d-flex align-items-center'>
                  <h5>Menu</h5>
                  <select id='selector1' className='text-dark fw-semibold'>
                    <option className='text-dark fs-6 fw-normal' selected><a href="">UZ</a></option>
                    <option className='text-dark fs-6 fw-normal'><a href="">RU</a></option>
                  </select>
                  </div>
                  <hr />
                  <h5>Shahar</h5>
                  <select id='selector1'>
                    <option selected>Toshkent viloyati, Toshkent shahri</option>
                    <option value="1">Farg'ona viloyati, Qo'qon shahri</option>
                    <option value="2">Andijon viloyati, Asaka shahri</option>
                    <option value="3">Namangan viloyati, Chust shaxri</option>
                  </select><hr />
                  <a className='text-decoration-none text-dark' href=""><span><i class="far fa-question-circle text-warning fs-4"></i><span className='fw-semibold ms-2'>Yordam</span></span></a>
                </div>
              </div>
            </div>
        </div>


        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <span className='fs-3'><center>Davom etish uchun tizimga kiring yoki ro'yxatdan o'ting</center></span>
                <button id='btn-top' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form id="myForm">
                <input className='form-control' type="text" id="phone" placeholder="(95) 555-5555"/>
              </form>
              </div>
              <div class="modal-footer">
                <button className='btn btn-secondary d-flex mx-auto text-center'>Kodni olish</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Hide this modal and show the first with the button below.
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}