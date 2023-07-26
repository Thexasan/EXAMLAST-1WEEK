import React from 'react'

import stroy from '../../assets/Group 31.png'
import group from '../../assets/Group 30.png'
import group2 from '../../assets/Group 24.png'
import group3 from '../../assets/Group 25.png'
import group4 from '../../assets/Group 20.png'
import { Link } from 'react-router-dom'

const Uslugi = () => {
  return (
    <div>
      <section data-aos="zoom-out" className='max-w-[100%] mt-[30px]'>
        <div className="container">
          <div>
            <h1 className='text-[14px] font-[400] text-[#FFF] dark:text-[#333333]'>Главная &gt; Услуги</h1>
            <Link to={"/usluga"}>
            <h1 className='text-[#0D4373] text-[24px] font-[600] py-[20px]'>Услуги</h1>
            </Link>
            <p className='text-[16px] text-[#868686] font-[400]'>За время работы благодаря активной и рациональной кадровой политике в организации сформировалась команда профессионалов лучших в своем деле.
Наличие собственной строительной техники, автотранспорта и средств малой механизации позволяет компании проводить полный комплекс строительно-монтажных работ и делает нас конкурентной на рынке строительных услуг.</p>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[20px]">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center lg:items-start justify-between gap-[30px]">
            <div data-aos="zoom-out-left">
              <img src={stroy} alt="" />
            </div>
            <div data-aos="zoom-out-right">
              <img src={group} alt="" />
            </div>
          </div>
          <div className="mt-[20px] flex lg:flex-row flex-col items-center lg:items-start justify-between gap-[30px]">
            <div data-aos="zoom-out-left">
              <img src={group2} alt="" />
            </div>
              <div data-aos="zoom-out" >
              <img src={group3} alt="" />
            </div>
              <div data-aos="zoom-out-right">
              <img src={group4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Uslugi