import React from 'react'
import rex from '../../assets/Rectangle 9.jpg'
import strek from '../../assets/chevrons-right.svg'
import rexr from '../../assets/Rectangle 9 copy.jpg'
import rex2 from '../../assets/Rectangle 9 (1).jpg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const News = () => {
  return (
    <div>
      <section className='max-w-[100%] mt-[20px]'>
        <div  className="container">
        <div data-aos="fade-down">
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Новости
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Новости
            </h1>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] items-center'>
            <div  data-aos="fade-right">
              <img src={rex} alt="" />
              <div className=''>
                <h1 className='text-[#0D4373] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div  data-aos="fade-out">
              <img src={rexr} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <Link to={"/funt"}>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
                </Link>
              </div>
            </div>
            <div  data-aos="fade-left">
              <img src={rex2} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333]  hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div  data-aos="fade-right">
              <img src={rex2} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div>
              <img src={rexr} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div  data-aos="fade-left">
              <img src={rex} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686]  py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div  data-aos="fade-right">
              <img src={rex} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] hover:text-[#D74C20] text-[#FFF] dark:text-[#333333] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
            <div  data-aos="fade-left">
              <img src={rexr} alt="" />
              <div className=''>
                <h1 className='text-[#FFF] dark:text-[#333333] font-[700] text-[18px]'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
                <p className='text-[16px] font-[400] text-[#868686] py-[15px]'>02.10.2020</p>
                <button className='flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center'>Подробнее <img className='w-[20px]' src={strek} alt="" /></button>
              </div>
            </div>
          </div>
          <div className='text-center py-[60px]'>
          <Button variant="outlined" color="error">
          Показать еще
          </Button>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default News