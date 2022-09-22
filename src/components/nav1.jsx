import React, { Component } from 'react'
import "../css/nav1.css"

export default class nav1 extends Component {
  render() {
    function openSearch() {
      document.getElementById("myOverlay").style.display = "block";
    }
    
    function closeSearch() {
      document.getElementById("myOverlay").style.display = "none";
    }
    return (
      <div id='nav' className='bg-white'>
        <div className='ps-4 pe-4 navbar d-flex align-items-center'>
            <div id='img'>
                <a href=""><img className='img-fluid' src="assets/Logo.svg" alt="" /></a>
            </div>
            <div id='searchme'>
              <input type="text" placeholder='O`zingiz xohlagan narsani qidiring...' />
              <span className='point'><i className='fas fa-search fs-4'></i></span>
            </div>
            <div id="myOverlay" className='overlay'>
              <span className="closebtn" onClick={closeSearch} title="Close Overlay"><i className='fas fa-arrow-left'></i></span>
              <div className='overlay-content'>
                <form action="/action_page.php">
                  <div className='hidediv'>
                    <input className='hideinp' type="text" placeholder="Search.." name="search" />
                    <button className='hidebtn' type="submit"><i className='fa fa-search'></i></button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <button className='openBtn' onClick={openSearch}><i className='fa fa-search'></i></button>
              <span id='iconcol' className='fs-2'><i class="far fa-heart"></i></span>
              <span id='iconnone' className='ms-4 fs-2'><i className='fas fa-shopping-bag'></i></span>
              <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" role="button" id='iconnone' className='ms-4 fs-2'><i className='far fa-user'></i></span>
            </div>
        </div>
      </div>
    )
  }
}
