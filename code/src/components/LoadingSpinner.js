import React from 'react'
import './loadingspinner.css'

export const LoadingSpinner = () => {

  return (
    <section className="loading">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </section>
  )
}