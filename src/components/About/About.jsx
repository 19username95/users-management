import React from 'react';
import './About.scss';
import {Avatar, Box} from "@material-ui/core";
import avatar from "../../assets/images/avatar.png";
import {Email, GitHub, LinkedIn, Phone, Telegram} from "@material-ui/icons";
import Title from "../Title/Title";
import { Link } from "@material-ui/core";

class About extends React.Component {
    render() {
        return <Box className='About'>
            <Avatar className='About-Avatar' alt='Avatar' src={avatar} />
            <div className='About-Name'>Jana Kazakova</div>

            <div className='About-Contacts'>
                <Title className='About-ContactsTitle'>Contacts</Title>
                <div className='About-Contact'><Email/> kazakovayana95@icloud.com</div>
                <div className='About-Contact'><Phone/> +38 (063) 807-11-38</div>
                <Link className='About-ContactLink' href='https://github.com/19username95/'>
                    <GitHub/>
                </Link>
                <Link className='About-ContactLink' href='https://www.t.me/kazakovayana95/'>
                    <Telegram/>
                </Link>
                <Link className='About-ContactLink' href='https://www.linkedin.com/in/jana-kazakova-81571419a/'>
                    <LinkedIn/>
                </Link>
            </div>
        </Box>
    }
}

export default About;