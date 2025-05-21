import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#F4F4F6] py-5'>
        <div className="container mx-auto flex px-2 gap-5 lg:gap-[180px]">
          <div>
            <h2 className='py-3 font-bold'>CUSTOMER CARE</h2>
            <ul>
              <li><a href="">Help Center</a></li>
              <li><a href="">How to Buy</a></li>
              <li><a href="">Returns and Refunds</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className='py-3 font-bold'>DARAZ</h2>
            <ul>
              <li><a href="">About Daraz</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Daraz Blog</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Digital Payments</a></li>
              <li><a href="">Daraz Customer University</a></li>
              <li><a href="">Daraz Affiliate Program</a></li>
            </ul>
          </div>
          <div>
           <a href=""> <img className='w-[120px] h-[40px] mt-5' src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png"/></a>
           <a href=""><img className='w-[120px] h-[40px] mt-5' src="https://img.lazcdn.com/us/domino/130438e4-2c46-4620-adee-5d6e33b011cb_NP-126-42.png"/></a>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
