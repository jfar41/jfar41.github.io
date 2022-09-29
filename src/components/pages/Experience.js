import React from "react";
import "./projectsPage.scss";

const Experiences = {
    personal: {
        name: "ricocode",
        link: "https://linktr.ee/ricocode",
        years: "Tech Content Creator | 2022",
        pic: require("../../images/DevTeam.jpeg"), 
        summary: "Excited and joyful as always to learn and share it with others, I decided to become a content creator to increase awareness about the IT space, be a minority in tech advocate, and connect with others in the field!"
    },
    oneboard: {
        name: "oneboard",
        link: "https://oneboard.live/",
        years: "Full Stack Software Engineer | 2020-2022",
        pic: require("../../images/DevTeam.jpeg"), 
        summary: "Using a NoSQL based cloud storage and query, I've created and oversaw development of the social network (user activity, users’ presence, notifications, tracking), led the build of an in-house chat system, groups feature, and pins feature with a userbase communicating across the U.S., China, and India (100k total monthly users)"
    },
    generalAssembly: {
        name: "General Assembly",
        link: "/certificates/GeneralAssembly",
        years: "Software Engineering Immersive Program | 2020",
        pic: "",
        summary: "I gained a year worth of programming experience through GA's 12 week Software Engineering Immersive program, in where I learned cutting-edge web technology such as JavaScript, HMTL5, CSS3, Express.JS, Mongoose, MongoDB Atlas, Heroku, Python, Django, OAuth, Amazon Web Services, and React. My creativity, tech savviness, and grit was tested on a daily basis on a wide range of activities that required completion such as: solo coding projects, algorithms & data structures white board mocks, and group projects."
    },
    uci: {
        name: "University of California, Irvine",
        link: "https://uci.edu/",
        years: "Biological Sciences | 2016-2020",
        summary: "Graduated with a Bachelors in Science for biology with an emphasis on human biology. I founded and was president of Community Table, a student led org that tackles on food insecurity within the UCI community. I also served as a Regional Director, on behalf of Thrive Scholars, to mentor 30 Thrive scholars."
    }
}
export const Experience = () => {
    return (
        <div className="timeLineUI" id="experience">
            <div className="timeline">
                {Object.keys(Experiences).map((experience, idx) => <ExperienceContainer experience={experience} idx={idx} key={idx}/>)}
            </div>
        </div>
    )
}
const ExperienceContainer = ({experience, idx}) => {
    let experienceRef = Experiences[experience]
    let containerStyles;
    if (idx % 2 === 0) {
        containerStyles = "container right"
    } else {
        containerStyles = "container left"
    }
    return (
        <div class={containerStyles}>
            <div class="content">
                <h2><a href={experienceRef.link}>{experienceRef.name}</a></h2>
                <h6>{experienceRef.years}</h6>
                <p>
                    {experienceRef.summary}
                </p>
            </div>
        </div>
    )
}