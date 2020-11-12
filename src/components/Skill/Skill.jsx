import React from "react";
    let symbol =`\u25CF \t`;

const Skill = ({ skillName }) => {
    return <span>{skillName} {symbol}</span>
}

export default Skill;