 import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex iteam- center justify-between h-[90vh] bg-amber-900'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content

