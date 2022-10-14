import React, { Component } from 'react'
import "../css/foot.css"

export default class foot extends Component {
  render() {
    return (
      <div id='lg-none' className='fixed-bottom border-top bg-white'>
        <div className='container-fluid pt-2 d-flex justify-content-between'>
            <div>
                <a id='footcol' className='text-decoration-none' href=""><img id='marg' src="assets/sm-home-active.svg" alt="" /><p>Asosiy</p></a>
            </div>
            <div>
                <a id='footcol1' className='text-decoration-none' href=""><img id='marg1' src="assets/sm-category.svg" alt="" /><p>Katalog</p></a>
            </div>
            <div>
                <img width={50} height={50} src="assets/tinfis-logo.svg" alt="" />
            </div>
            <div>
                <a id='footcol1' className='text-decoration-none' href=""><img id='marg2' src="assets/cart.svg" alt="" /><p>Savat</p></a>
            </div>
            <div>
                <a id='footcol1' className='text-decoration-none' href=""><img id='marg3' src="assets/profile.svg" alt="" /><p>Profil</p></a>
            </div>
        </div>
      </div>
    )
  }
}
