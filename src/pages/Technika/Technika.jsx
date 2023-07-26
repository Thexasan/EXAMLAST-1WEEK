import React from 'react'
import check from '../../assets/check.svg'
import stroy from '../../assets/Group 33.png'
import group from '../../assets/Group 34.png'
import groupp2 from '../../assets/Group 24 copy.png'
import group3 from '../../assets/Group 36.png'
import group4 from '../../assets/Group 37.png'
import group7 from '../../assets/Group 35.png'
import group8 from '../../assets/Group 38.png'
import group9 from '../../assets/Group 39.png'
import { Link } from 'react-router-dom'

const Technika = () => {
  return (
    <div>
      <section className='max-w-[100%] mt-[20px]'>
        <div className="container">
        <div className='ml-[2%]'>
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Техника
            </h1>
            <h1 className="dark:text-[#0D4373] text-blue-500 text-[24px] font-[600] py-[20px]">
            Техника
            </h1>
            <p className='text-[16px] text-[#868686] font-[400]'>УСТРОЙСТВО СВАЙ - весьма обширная сфера строительства, предусматривающая проведение комплексных, высокоточных работ, а также выполнение этих работ согласно технологиям и нормам. Потому выбору техники для производства работ должно уделяться должное внимание.</p>
            <h1 className="text-[16px] font-[400] text-[#868686] py-[5px] flex items-start gap-1">
                    <img src={check} alt="" /> Мы владеем собственной буровой техникой производителей ABI Group, BAUER, MAIT 
                  </h1>
                  <h1 className="text-[16px] font-[400] text-[#868686]  flex items-start gap-1">
                    <img src={check} alt="" /> подвесным оборудовани- ем для вибропогружения труб и шпунта  APE HOLLAND 150
                  </h1>
                  <h1 className="text-[16px] font-[400] text-[#868686]  flex items-start gap-1">
                    <img src={check} alt="" /> а также сваебой- ными установка- ми фирмы   JUNTTAN
                  </h1>
                  <p className='text-[16px] text-[#868686] font-[400] py-[5px]'>Наша компания объединяет колоссальный опыт, компетенции, что в сочетании с техникой ведущих мировых производителей, позволяет нам быть лидерами рынка Республики Беларусь в этом сегменте.</p>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[20px]">
        <div className="container my-[40px]">
          <div className="flex lg:flex-row flex-col justify-between gap-[30px]">
            <div>
              <img className='m-auto w-[95%] lg:m-0 lg:w-auto' src={groupp2} alt="" />
            </div>
            <Link to={"/junnat"}>
            <div>
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={stroy} alt="" />
            </div>
            </Link>
          </div>
          <div className="mt-[20px] flex lg:flex-row flex-col justify-between gap-[30px]">
            <div>
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={group} alt="" />
            </div>
              <div >
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={group3} alt="" />
            </div>
              <div >
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={group4} alt="" />
            </div>
          </div>
          <div className="mt-[20px] flex lg:flex-row flex-col justify-between gap-[30px]">
            <div>
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={group7} alt="" />
            </div>
              <div >
              <img className='m-auto w-[85%] lg:m-0 lg:w-auto' src={group8} alt="" />
            </div>
              <div >
              <img className='m-auto w-[65%] lg:m-0 lg:w-auto' src={group9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technika