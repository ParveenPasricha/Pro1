import React from 'react'
import { useParams } from 'react-router-dom'

const EditPost = () => {
    let { _id } = useParams()
    return (
    <div className='bg-orange-600'>
      <h1 className='mt-28'>Edit Post : {_id}</h1>
    </div>
  )
}

export default EditPost
