import React from 'react'
import { useNavigate } from 'react-router-dom'
import '.././pages/style/home.css'


function ResultData(props) {

  let navigate = useNavigate()

  return (
    <div className='resultsData-wrap'>
      {props.searchResults.map((r, index) => (
        <div className='result-Data-content' key={index} onClick={() => navigate(`/playerlist/${r._id}`) }>
          <img className='result-Data-image' src={r.image} alt={''} />
         {/* <h3 className='result-Data-name'>{r.name}</h3> */}
       </div>
      )
      )}
       
    </div>
  )
}

export default ResultData
