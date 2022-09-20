import React from "react";
import "./projectsPage.scss";

const Projects = {
    personal: {
        name: "ricocode",
        link: "https://linktr.ee/ricocode",
        years: "Tech Content Creator | 2022",
        pic: require("../../images/DevTeam.jpeg"), 
        summary: "Excited and joyful as always to learn and share it with others, I decided to become a content creator to increase awareness about the IT space, be a minority in tech advocate, and build a network with others!"
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
        link: "https://generalassemb.ly/?&topic=&mkt_account_id=1056949875&mkt_campaign_id=691438924&mkt_ad_group_id=33353652422&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=155686987642&mkt_network=g&mkt_target_id=aud-376588634307:kwd-459322816&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:LAX:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=CjwKCAjwyaWZBhBGEiwACslQo-bAAHH-UtL9J_mDd9aibhPKRRQgmPOpLpzl3nMamjWPEqvLTvaU0RoC6YEQAvD_BwE&gclsrc=aw.ds",
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
export const ProjectsPage = () => {
    return (
        <div className="timeLineUI" id="experience">
            <div className="timeline">
                {Object.keys(Projects).map((project, idx) => <ProjectContainer project={project} idx={idx} key={idx}/>)}
            </div>
        </div>
    )
}
const ProjectContainer = ({project, idx}) => {
    let projectRef = Projects[project]
    let containerStyles;
    if (idx % 2 === 0) {
        containerStyles = "container right"
    } else {
        containerStyles = "container left"
    }
    console.log(project)
    return (
        <div class={containerStyles}>
            <div class="content">
                <h2><a href={projectRef.link}>{projectRef.name}</a></h2>
                <h6>{projectRef.years}</h6>
                <p>
                    {projectRef.summary}
                </p>
            </div>
        </div>
    )
}