import React from 'react'
import Form from './Form'
import Footer from './Footer'

function MainPage() {
  return (
    <div className='h-full'>
      <section className="h-full flex flex-col items-center py-8 w-[50%] mx-auto">
        <div className="mt-auto">
          <Form />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default MainPage