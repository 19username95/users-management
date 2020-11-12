import React from "react";
import './Work.scss'

const Work = ({ title, company, location, startDate, finishDate, about }) => {
    let delimeter =`\t|\t`;
    return <div className='Work'>
        <div className='Work-Title'>{title}</div>
        <div className='Work-Info'>
            <span>{company}</span>
            <span className='Work-Delimeter'>{delimeter}</span>
            <span>{location}</span>
            <span className='Work-dates'>{startDate} - {finishDate}</span>
        </div>
        <p className="Work-About">{about}</p>

    </div>
}

export default Work;