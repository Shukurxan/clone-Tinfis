import React, { Component } from 'react'
import Nav from '../components/nav'
import Nav1 from '../components/nav1'
import Nav2 from '../components/nav2'
import '../css/page2header.css'

export default class page2header extends Component {
  handleChange(){
    document.getElementById("bigimg").src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FGIdXnZuwyekTi4X2F61ZexNERCeCoTjouJXBFE4P.jpg&w=1920&q=10"
    document.getElementById("divimg").style.border = "2px solid orange"
    document.getElementById("divimg").style.borderRadius = "5px"
    document.getElementById("divimg1").style.border = "none"
    document.getElementById("divimg2").style.border = "none"
    document.getElementById("divimg3").style.border = "none"
    document.getElementById("divimg4").style.border = "none"
  }
  handleChange1(){
    document.getElementById("bigimg").src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F9uBkfCMjzshsxygee4fEtuXRyCNd3lb9V9q4TyPk.jpg&w=1920&q=10"
    document.getElementById("divimg1").style.border = "2px solid orange"
    document.getElementById("divimg1").style.borderRadius = "5px"
    document.getElementById("divimg").style.border = "none"
    document.getElementById("divimg2").style.border = "none"
    document.getElementById("divimg3").style.border = "none"
    document.getElementById("divimg4").style.border = "none"
  }
  handleChange2(){
    document.getElementById("bigimg").src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F3RRnYW6zP3e2LvZziapVYZoBUbtsf0C4EB8Wsa9j.jpg&w=1920&q=10"
    document.getElementById("divimg2").style.border = "2px solid orange"
    document.getElementById("divimg2").style.borderRadius = "5px"
    document.getElementById("divimg").style.border = "none"
    document.getElementById("divimg1").style.border = "none"
    document.getElementById("divimg3").style.border = "none"
    document.getElementById("divimg4").style.border = "none"
  }
  handleChange3(){
    document.getElementById("bigimg").src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FyysDprG4VtIeHGVJNftXjdgO5A3pM1cTyfJlwWJJ.jpg&w=1920&q=10"
    document.getElementById("divimg3").style.border = "2px solid orange"
    document.getElementById("divimg3").style.borderRadius = "5px"
    document.getElementById("divimg").style.border = "none"
    document.getElementById("divimg1").style.border = "none"
    document.getElementById("divimg2").style.border = "none"
    document.getElementById("divimg4").style.border = "none"
  }
  handleChange4(){
    document.getElementById("bigimg").src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FZiTsZyg7S3RCv4uypqq5jIzldg0YbUwkBrMKgiL6.jpg&w=1920&q=10"
    document.getElementById("divimg4").style.border = "2px solid orange"
    document.getElementById("divimg4").style.borderRadius = "5px"
    document.getElementById("divimg").style.border = "none"
    document.getElementById("divimg1").style.border = "none"
    document.getElementById("divimg2").style.border = "none"
    document.getElementById("divimg3").style.border = "none"
  }
  render() {
    return (
        <div >
        <Nav />
        <div className='sticky-top'>
        <Nav1 />
        <Nav2 />
        </div>
        <div className='container-fluid'>
            <div className='row bg-light'>
                <div className="col-xl-12 mt-3">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a className='text-muted' href="#">Elektronika</a></li>
                      <li class="breadcrumb-item"><a className='text-muted' href="#">Smartfon va telefonlar</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Eshitish vositasi va quloqchinlar</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-xl-6 d-inline-flex mt-4">
                  <div className="col-xl-1.5 overflow-auto ms-1">
                    <div id='divimg' className="col-xl-12" onMouseOver={this.handleChange}>
                      <img className='img-fluid rounded' src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FGIdXnZuwyekTi4X2F61ZexNERCeCoTjouJXBFE4P.jpg&w=1920&q=10" alt="" />
                    </div>
                    <div id='divimg1' className="col-xl-12 mt-3" onMouseOver={this.handleChange1}>
                      <img className='img-fluid rounded' src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F9uBkfCMjzshsxygee4fEtuXRyCNd3lb9V9q4TyPk.jpg&w=1920&q=10" alt="" />
                    </div>
                    <div id='divimg2' className="col-xl-12 mt-3" onMouseOver={this.handleChange2}>
                      <img className='img-fluid rounded' src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2F3RRnYW6zP3e2LvZziapVYZoBUbtsf0C4EB8Wsa9j.jpg&w=1920&q=10" alt="" />
                    </div>
                    <div id='divimg3' className="col-xl-12 mt-3" onMouseOver={this.handleChange3}>
                      <img className='img-fluid rounded' src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FyysDprG4VtIeHGVJNftXjdgO5A3pM1cTyfJlwWJJ.jpg&w=1920&q=10" alt="" />
                    </div>
                    <div id='divimg4' className="col-xl-12 mt-3" onMouseOver={this.handleChange4}>
                      <img className='img-fluid rounded' src="https://tinfis.uz/_next/image?url=https%3A%2F%2Fback.tinfis.uz%2Fpublic%2Fuploads%2Fall%2FZiTsZyg7S3RCv4uypqq5jIzldg0YbUwkBrMKgiL6.jpg&w=1920&q=10" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-10 ms-4">
                    <span id='badge'>Tavsiya etilgan</span>
                    <img id='bigimg' className='img-fluid' src="https://back.tinfis.uz/public/uploads/all/GIdXnZuwyekTi4X2F61ZexNERCeCoTjouJXBFE4P.jpg" alt="" />
                  </div>
                </div>


                <div className="col-xl-6"></div>
            </div>
        </div>
      </div>
    )
  }
}
