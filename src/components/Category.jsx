import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Explorar por tipo</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            <div  className='border rounded-md p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
                {/* Agregar datos de categoria */}
            </div>
        </div>
    </div>
  )
}

export default Category