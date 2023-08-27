import React ,{useState} from 'react'

 const Data = ({data}) => {
 console.log(data)

  return (
    <div >
       { 
       (data.cod == "200") && <div  className='weather'>
                    <h1>{data.name}</h1>
                    <p>{data.main.temp}</p>
                    <p>{data.weather[0].main}</p>
                    <div>
                        <img src={data.icon} />
                    </div>
         </div>
     }
    </div>
  )
}
export default Data