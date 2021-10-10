import React,{useState} from "react"

import api from "./Api"
import{FaComment, FaRegCheckCircle,FaLeaf,FaHeart,FaChartBar } from"react-icons/fa"

const TP2 = () => {
     const [Data, setData] = useState(api);

    

    return (
        <div  className="post">
            {
                Data.map((ele)=>{
                    const{profile,name,user,time,info,post,id1,id2,id3,id5}=ele;
                    return(
                        <>

              <div className="post-first">
                <div className="post-first-img">
                    {profile}
                </div>
              
                 <div className="post-first-name">
                     <strong> {name} </strong>
                     <FaRegCheckCircle className="verify"/>
                 </div>
                 
                  <div className="post-first-username">
                      {user}<span> {time} </span>
                  </div>
            </div>
                
                {/* post details */}
            <div className="post-details">
                <div className="post-msg">
                {info}
                </div>
                <div className="post-details-img">
                {post}
                </div>
            

                <div className="reactions">
                    <span><FaComment className="ic-reaction"/>{id1}</span>
                    <span><FaChartBar className="ic-reaction"/> {id2}</span>
                    <span><FaHeart className="ic-reaction"/>{id3}</span>
                   <span> <FaLeaf className="ic-reaction"/>{id5}</span>
                </div>
               </div>
               </>
                )
                })
            }
           
            
        </div>
    )
}

export default TP2
