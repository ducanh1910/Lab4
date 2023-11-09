import React from 'react'
export default function ModalCase({ setIsOpen, films } ) {
   return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id="modal1" className="modal" style={{display: 'block', top:'35%'}}>
          <div className="modal-content">
            <h4>Video for {films.Title} </h4>
            <p><iframe width="100%" height="400px" src={films.clip} title={films.Title} frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
          </div>
          <div className="modal-footer">
            <a className="modal-close red-text">Close</a>
           </div>
        </div>
    </div>
  )
}
