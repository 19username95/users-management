import React from 'react';
import './About.scss';
import {Avatar, Box} from "@material-ui/core";
import avatar from "../../assets/images/avatar.png";
import {Email, GitHub, LinkedIn, Phone, Telegram} from "@material-ui/icons";
import Title from "../Title/Title";
import { Link } from "@material-ui/core";
import Skill from "../Skill/Skill";
import Institution from "../Institution/Institution";
import Work from "../Work/Work";

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
            <div className='About-Skills'>
                <Title>Skills</Title>
                <Skill className='About-Skill' skillName={'HTML'}/>
                <Skill className='About-Skill' skillName={'CSS'}/>
                <Skill className='About-Skill' skillName={'SCSS'}/>
                <Skill className='About-Skill' skillName={'Java Script'}/>
                <Skill className='About-Skill' skillName={'Angular 2+'}/>
                <Skill className='About-Skill' skillName={'React'}/>
                <Skill className='About-Skill' skillName={'C#'}/>
                <Skill className='About-Skill' skillName={'Xamarin.Forms'}/>
                <Skill className='About-Skill' skillName={'WPF'}/>
                <Skill className='About-Skill' skillName={'ASP.NET'}/>
                <Skill className='About-Skill' skillName={'Assembler'}/>
            </div>
            <div className='About-Education'>
                <Title>Education</Title>
                <Institution className='About-Institution'
                             name={'Dnipro National University'}
                             faculty={'Faculty of Physics, Electronics and Computer Systems'}
                             specialty={'Nanoelectronics'}
                             year={'2016'}
                             isUniversity={true}
                />
                <Institution className='About-Institution'
                             name={'Dnipro National University'}
                             faculty={'Faculty of Physics, Electronics and Computer Systems'}
                             specialty={'Computer Engineering'}
                             year={'2020'}
                             isUniversity={true}
                />
                <Institution className='About-Institution'
                             name={'CISCO Academy'}
                             faculty={'Cybersecurity I'}
                             year={'2019'}
                />
                <Institution className='About-Institution'
                             name={'CISCO Academy'}
                             faculty={'CCNA I'}
                             year={'2019'}
                />
            </div>
            <div className='About-Experience'>
                <Title>Experience</Title>
                <Work title='Freelance author'
                      company='Self employeed'
                      location={'Remote'}
                      startDate='09.2018'
                      finishDate='present'
                      about='I write lab works, courseworks, graduation projects (diplomas), small projects using various
                      platforms: Assembler, .NET, Python, JS, GPSS (systems simulation programming language), etc.'/>
                <Work title='Software engineer'
                      company='Mive'
                      location='Dnipro, Ukraine'
                      startDate='09.2019'
                      finishDate='05.2020'
                      about='It is a small company, specializing on software development.
                      I used Xamarin.Forms, Angular 8, WPF, ASP.NET and other technologies for develop
                      software products.'/>
                <Work title='Intern software engineer'
                        company='HeadWorks'
                        location='Dnipro, Ukraine'
                        startDate='10.20'
                        finishDate='present'
                        about='I do internship as ReactJS intern.' />
            </div>
        </Box>
    }
}

export default About;