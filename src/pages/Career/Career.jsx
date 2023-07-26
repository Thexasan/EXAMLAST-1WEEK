import React from 'react'
import BasicAccordion from '../../components/Accordion/Accordion'

const Career = () => {
  return (
    <div>
      <section className='max-w-[100%] mt-[20px]'>
        <div className="container">
        <div className="ml-[2%] md:ml-[5%]">
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Карьера
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Карьера
            </h1>

            <div>
              <h1 className='text-[18px] font-[700] text-[#FFF] dark:text-[#333333]'>Работа в OOO «БелКопроСтрой» (текст для примера)</h1>
              <p className='text-[16px] font-[400] text-[#868686] py-[20px]'>Мы с гордостью заявляем, что наша компания это отличное место для начала или продолжения карьеры в данной отрасли. Мы предлагаем возможности для развития, доверительную рабочую атмосферу, различные льготы и многое другое.
Вы можете добиться успеха на любой из множества должностей. Наша компания придерживается клиентоориентированных принципов работы, и мы всегда ищем людей, которые принесут нам пользу и сделают наши услуги еще лучше.</p>
            </div>
            <div>
              <h1 className='text-[18px] font-[700] text-[#FFF] dark:text-[#333333]'>Что значит работать в SVAI.BY</h1>
              <p className='text-[16px] font-[400] text-[#868686] py-[20px]'>Нацеленные на командную работу и полные энтузиазма сотрудники - наш самый ценный ресурс, и мы боремся за привлечение талантливых специалистов, стараемся обеспечить их развитие и удержать их. Подбирая оптимальную команду и создавая для нее подходящие условия труда, мы разрабатываем решения, помогающие одерживать победу нашим заказчикам, а следовательно, и нам.</p>
            </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <BasicAccordion/>
            </div>
            <div className='pb-[100px]'>
              <h1 className='font-[400] text-[#868686]'>Полная информация о работе и заработной плате по тел. +375 44 767 60 76</h1>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Career