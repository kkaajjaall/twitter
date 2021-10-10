import React from 'react'
import{FaRegImages,FaRegListAlt,FaRegSmile,FaCalendarCheck, FaRegCalendarCheck}  from"react-icons/fa"

const TP1 = () => {
    return (
    
            
            <div className="Create">
            <div className="create-first">
                <div className="create-img">
                    <img src="pic7.jpg"></img>
                </div>

                <div className="create-input">
                    <input type="text" className="subinput" placeholder="Whats happining ?" />
                </div>
                </div>


            <div className="create-second">
            <div className=" create-icon">
            <FaRegImages className="ic"/>
            <FaRegListAlt className="ic"/>
            <FaRegSmile className="ic"/>
            <FaRegCalendarCheck className="ic"/>
            </div>
            
        <div className="create-btn">
            <a href="#" className="create-btn2"> Tweet</a>
        </div>
            

            </div>

            </div>
            
    
    
    )
}

export default TP1
