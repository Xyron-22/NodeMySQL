import React from 'react';
import UpdateComponent from '@/components/updateComponent';

const Update = ({params}) => {
   
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
       <UpdateComponent props = {params.id}></UpdateComponent>
    </main>
  )
}

export default Update