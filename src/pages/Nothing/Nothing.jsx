import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nothing = () => {
  return (
    <div>
      <section className='max-w-[100%] bg-[#0D4373]'>
        <div className="container">
        <div className='text-center'>
        <h1 className='text-[288px] text-[#FFF] font-[800]'>404</h1>
          <h1 className='text-[24px] text-[#FFF]'>Сожалеем, но запрошенная страница не найдена</h1>
          <div className='flex gap-[30px] justify-center py-[20px]'>
            <Link to={"/"}>
            <Button variant='contained' color='error'>Перейти на главную</Button>
            </Link>
            <Link to={"/contact"}>
            <Button variant='outlined' color='inherit'>Связаться с нами</Button>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Nothing