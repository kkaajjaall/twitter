import React,{useState} from 'react'
import{FaSistrix}from"react-icons/fa"
import Third from './Tapi';

const Trends = () => {
     const [state, setstate] = useState(Third);
    return (
        <>
        <div className="main">
        <div className="trends">
            <div className="trends-search">
                  < div className="trends-control">
                <FaSistrix className="icont" />
                <input type="text" className="trends-control"   placeholder="Search Twitter"/>
                  </div>   
              </div>      
         </div>

         <div className="key">
             <div className="subkey">
             <div class="key-heading">
                 <h4> Trends for you </h4>
             </div>

             <div className="scroll">

             {
                 state.map((e)=>{
                     const{country,name,tweet}=e;
                     return(
                         <>
               
               <div class="key-country">
                 <h5> {country} </h5>
             </div>
             <div className="key-name">
                 <strong> {name}</strong>
             </div>
             <div className="key-tweet">
                 {tweet}
             </div>
             
                         </>

                     )
                 })
             }
             </div>
         </div>
         </div>
</div>
</>

    )
}

export default Trends
