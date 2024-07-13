import React from 'react'

const footer = ({handleToggleModal, data}) => {
  return (
    <>

    <footer>
        <div>
            <h2>{data?.title}</h2>
            <h1>Apod Project</h1>
        </div>
   <button onClick={handleToggleModal} >
   <i className="fa-solid fa-info"></i>

   </button>
    </footer>
    </>

    )
}

export default footer