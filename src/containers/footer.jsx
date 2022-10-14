import React from 'react'
import "../css/footer.css"

const footer = () => {
  return (
    <div>
      <div className='ps-5 pe-5 pt-5 pb-3 ms-5 mt-5'>
        <h1 className='fw-bold'>Onlayn xarid qilish qulay va foydali.</h1>
      </div>
      <div className='ps-5 pe-5 ms-5'>
        <p className='text-start'>«TINFIS» Marketpleysi keng assortimentdagi mahsulotlarni xarid qilishni taklif qiladi. Onlayn gipermarketimizda siz har qanday mahsulotni topishingiz mumkin - oziq-ovqat, elektronika, maishiy texnika, kiyim-kechak, poyabzal, ish yuritish buyumlari va boshqalar.</p>
      </div>
      <div className='pe-5 pb-5 pt-3'>
        <a className='float-end' id='under-line' href="">Hammasini o'qish</a>
      </div>
      <div className='w-100 bg-white p-3'>
        <div className='row'>
          <div className="col-3">
            <div className='mt-4'>
              <center>
                <img width={180} height={60} className='img-fluid' src="https://tinfis.uz/img/Logo.svg" alt="" />
                <p className='opacity-75 mt-4'>Mobil ilovamizni yuklab oling</p>
              </center>
              <center className="d-inline-flex">
                <a href=""><img className='img-fluid' src="https://tinfis.uz/_next/image?url=%2Fimg%2Fappstore.png&w=256&q=75" alt="" /></a>
                <a href=""><img className='ms-1 img-fluid' src="https://tinfis.uz/_next/image?url=%2Fimg%2Fgoogle-play.png&w=256&q=75" alt="" /></a>
              </center>
              <center>
                <p className='opacity-75 mt-4'>Bizni ijtimoiy tarmoqlarda toping</p>
              </center>
              <center>
                <a className="ms-2" href=""><img className='img-fluid' src="https://tinfis.uz/img/youtobe.png" alt="" /></a>
                <a className="ms-2" href=""><img className='img-fluid' src="https://tinfis.uz/img/insta.png" alt="" /></a>
                <a className="ms-2" href=""><img className='img-fluid' src="https://tinfis.uz/img/facebook.png" alt="" /></a>
                <a className="ms-2" href=""><img className='img-fluid' src="https://tinfis.uz/img/telegram.png" alt="" /></a>
              </center>
            </div>
          </div>
          <div className="col-3">
            <h4 id='clients'>Xaridorlar</h4>
            <ul id='foot-list'>
              <a href=""><li>Buyurtmani qanday qilish kerak</li></a>
              <a href=""><li>Tovarlarni qaytarish</li></a>
              <a href=""><li>Tovarlarni yetkazib berish</li></a>
              <a href=""><li>Ommaviy oferta</li></a>
              <a href=""><li>Savol va Javoblar</li></a>
              <a href=""><li>Pulni qaytarish</li></a>
              <a href=""><li>Tovarlar uchun to'lov</li></a>
            </ul>
            <button id='saler' className='btn btn-warning rounded-5'>Sotuvchining kabineti</button>
          </div>
          <div className="col-3">
            <h4 id='clients'>Hamkorlar uchun</h4>
            <ul id='foot-list'>
              <a href=""><li>TINFISda savdo qiling</li></a>
              <a href=""><li>Qabul qilish shohobchasini oching</li></a>
              <a href=""><li>Yuk tashuvchilar uchun</li></a>
            </ul>
            <h4 id='clients'>Kampaniya</h4>
            <ul id='foot-list'>
              <a href=""><li>Bizning kontaktlarimiz</li></a>
              <a href=""><li>Bizning bo'sh ish o'rinlarimiz</li></a>
              <a href=""><li>Platforma haqida</li></a>
            </ul>
          </div>
          <div className="col-3">
            <h4 id='clients'>SAVOLLARINGIZ BORMI?</h4>
            <center>
              <img className='img-fluid mt-3' src="https://tinfis.uz/img/footer-headphone.png" alt="" />
            </center>
            <center><span id='clients' className='fw-bold fs-5 mt-2'>+998 71 <span className='fs-4'>209 03 33</span></span></center>
            <center>
              <img className='img-fluid mt-2' src="https://tinfis.uz/img/footer-mail.png" alt="" />
            </center>
            <ul id='site-info'>
              <a href=""><li>info@tinfis.uz</li></a>
            </ul>
            <center className="mt-4">
              <img width={80} className='img-fluid' src="https://tinfis.uz/img/humo.png" alt="" />
              <img width={80} className='img-fluid' src="https://tinfis.uz/img/uzcard.jpg" alt="" />
            </center>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <center>
          <span className='fs-5 opacity-75'>© 2021 Barcha huquqlar himoyalangan. O'zbekiston bo'ylab yetkazib beriladi.</span>
        </center>
      </div>
    </div>
  )
}

export default footer
