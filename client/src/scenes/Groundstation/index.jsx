import React from 'react'
import Navbar from '../../components/Navbar'
import gs from '../../assets/gsimg.jpeg'


function GroundStation() {
  return (
    <>
    <Navbar bgcolor = "#ffffff" textColor = "#000000"/>
    <div>
    <div>
          GroundStation
    </div>
    <div className='gs  bg-black w-full h-[100vh]'>
      <div className='mt-20 h-[5vh] pl-5 text-xl text-white'>
        About Ground Station
      </div>
      <div className='flex flex-col'>
        <div className="">
          <img src={gs} alt="" className="w-full  h-[50vh]  rounded-lg border-4 rounded-xl " />
        </div>
        <div className='txt  text-white pl-7'>
          text are displayed here
        </div>
      </div>
    </div>
    </div>
    </>

  )
}

export default GroundStation;
