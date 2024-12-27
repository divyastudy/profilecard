import React from 'react'
import '../CSS/ProfileCard.css'

function ProfileCard(props) {
    return (
        <div className='container'>
            <div className='card_con'>
                <span className={props.status ? "status online" : "status offline"}>
                    {props.status ? "Online" : "Offline"}
                </span>
                <img src={props.img} alt="profile pic" className='pic' />
                <h3>{props.name}</h3>
                <h3>{props.place}</h3>
                <p>{props.role}</p>
                <div className='btns'>
                    <button className='btn'>Message</button>
                    <button className='btn'>Follow</button>
                </div>
            </div>
            <div className='skill_con'>
                <h3>Skills :</h3>
                <ul>
                    {props.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard