import React from "react";
import './Institution.scss';
import {School} from "@material-ui/icons";

const Institution = ({ name, faculty, specialty, year, isUniversity }) => {
    return <div className='Institution'>
        <div className='Institution-Title'>
            <School className='Institution-Icon' />
            <div className='Institution-Year'>{year}</div>
        </div>
        <div className='Institution-Body'>
            <div className='Institution-Name'>{name}</div>
            <div className='Institution-Faculty'>{faculty}{isUniversity?',':null}</div>
            <div className='Institution-Specialty'>{specialty}</div>
        </div>
    </div>
}

export default Institution;