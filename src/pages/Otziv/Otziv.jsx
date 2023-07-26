import React from 'react'
import otziv from '../../assets/image 14.jpg'
import otziv2 from '../../assets/image 15.jpg'
import otziv3 from '../../assets/image 16.jpg'
import otziv4 from '../../assets/image 17.jpg'
import { Button } from '@mui/material'

const Otziv = () => {
  return (
    <div>
      <section className='max-w-[100%] mt-[20px]'>
        <div className="container">
        <div>
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Отзывы
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Отзывы
            </h1>
            <p className='text-[16px] text-[#868686] font-[400]'>Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[40px]'>
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img src={otziv} alt="" />
            <img src={otziv2} alt="" />
            <img src={otziv3} alt="" />
            <img src={otziv4} alt="" />
            <img src={otziv} alt="" />
            <img src={otziv2} alt="" />
            <img src={otziv} alt="" />
            <img src={otziv2} alt="" />
            <img src={otziv3} alt="" />
            <img src={otziv4} alt="" />
            <img src={otziv} alt="" />
            <img src={otziv2} alt="" />
            <img src={otziv3} alt="" />
            <img src={otziv4} alt="" />
          </div>
          <div className='text-center py-[20px]'>
          <Button variant="outlined" color="error">
          Показать еще
          </Button>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default Otziv