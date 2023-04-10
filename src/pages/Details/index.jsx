import React from 'react'
import { useParams } from 'react-router-dom'
import DetailView from './DetailView';

const Details = () => {
    const params=useParams();
  return (
    <div>
      <DetailView id={params.id}></DetailView>
    </div>
  )
}

export default Details
