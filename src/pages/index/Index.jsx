import Nav from "../../components/NAv/Nav"
import IndexCss from './../index/Index.module.css'
import heroImage from './../../assets/hero-image.png'
import about_image from './../../assets/about-hero.png'
import frontend from './../../assets/Frontend.png'
import Backend from './../../assets/Backend.png'
import UiUx from './../../assets/UiUx.png'
import {ReactTyped} from 'react-typed'
import Card from "../../components/card/Card"
import Skill from "../../components/card/Skill"
import Experience from "../../components/card/Experience"
import { motion } from "framer-motion";
import { Project } from "../../components/card/Project"
import ImagePro01 from './../../assets/portfolio-image-01.png'
import ImagePro02 from './../../assets/portfolio-image-02.png'
import ImagePro03 from './../../assets/portfolio-image-03.png'
import ImagePro04 from './../../assets/portfolio-image-04.png'


function Index() {
    const skills = [
        {
            id: "0",
            name: "HTML",
            level: "90%"
        },
        {
            id: "1",
            name: "CSS",
            level: "85%"
        },
        {
            id: "2",
            name: "JavaScript",
            level: "80%"
        },
        {
            id: "3",
            name: "PHP",
            level: "85%"
        },
        {
            id: "4",
            name: "Laravel",
            level: "80%"
        },
        {
            id: "5",
            name: "Bootstrap",
            level: "85%"
        },
        {
            id: "7",
            name: "React",
            level: "75%"
        },
        {
            id: "8",
            name: "Python",
            level: "75%"
        },
        {
            id: "10",
            name: "SQL & Databases",
            level: "80%"
        },
    ];
    const projects = [
    {
        id: "0",
        name: 'Mobile App',
        image: ImagePro01,
        content: "Developed a cross-platform mobile app with React Native and Firebase."
    },
    {
        id: "1",
        name: 'E-commerce Website',
        image: ImagePro02,
        content: "Built a full-stack e-commerce platform using Laravel and Vue.js."
    },
    {
        id: "2",
        name: 'Portfolio Website',
        image: ImagePro03,
        content: "Created a personal portfolio website using React and Tailwind CSS."
    },
    {
        id: "3",
        name: 'HR Management System',
        image: ImagePro04,
        content: "Developed an HR system with authentication, payroll, and leave management."
    },
];

    const experienceData = [
        {
            id: 0,
            name: "Software Engineer",
            company: "Google",
            from: "Sept 2022",
            to: "Present",
            skills: [
                "Developed multiple features for Google's flagship product",
                "Collaborated with cross-functional teams to design and implement new features"
            ]
        },
        {
            id: 1,
            name: "Backend Developer",
            company:  "Microsoft",
            from: "Jan 2023",
            to: "Present",
            skills: [
                "Built scalable APIs for enterprise applications",
                "Optimized database queries for performance improvement"
            ]
        },
        {
            id: 2,
            name: "Frontend Developer",
            company: "Meta",
            from: "June 2021",
            to: "Dec 2022",
            skills: [
                "Designed and implemented interactive UI components",
                "Worked with React and Next.js to optimize performance"
            ]
        }
    ];

    return (
        <>
            {/* -------------header---------------- */}
            <div className={IndexCss.headerwrapper}>
                <Nav />
                <div className={IndexCss.headerContainer}>
                    
                    <div className={IndexCss.headerContent}>
                        <h5>Hello I m '</h5>
                        <h1>Mohamed</h1>
                        <p>A passionate {" "}
                            <span>
                                <ReactTyped
                                    strings={[' software Engineering ', ' web developer ']}
                                    typeSpeed={40}
                                    loop={true}
                                    backSpeed={40}
                                />
                            </span>
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum laborum asperiores aut quam est?</p>
                       
                        <div className={IndexCss.social}>
                            <i className="ri-facebook-line"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-github-line"></i>
                        </div>

                        <button>CV <i className="ri-file-list-3-line"></i> </button>
                    </div>
                   
                    <div className={IndexCss.headerImage}>
                        <img src={heroImage} alt="hero-image" />
                        <div className={IndexCss.borderAnimation}></div>
                    </div>
               
                </div>
            </div>
            {/* ----------end header----------------- */}

            <section id="About" className={`${IndexCss.aboutwrapper}`}>
                <h2 className={IndexCss.sectionTitle}>About us</h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="box"
                >
                    <div className={IndexCss.about}>
                        <div className={IndexCss.aboutImage}>
                            <img src={about_image} alt="about_image" />
                        </div>
                        <div className={IndexCss.aboutContent}>
                            <Card title='frontend' imgSrc={frontend} />
                            <Card title='Backend' imgSrc={Backend} />
                            <Card title='UiUx' imgSrc={UiUx} />
                        </div>
                    </div>
                </motion.div>
                
                
            </section>

            <section id="experience" className={IndexCss.experience_container}>

                <h2 className={IndexCss.sectionTitle}>My Experience</h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="box"
                >
                    <div className={IndexCss.experience}>
                        <div className={IndexCss.skillsWrapper}>
                            <h3>My Skills</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt impedit maiores nostrum, explicabo ab!</p>
                            <div className={IndexCss.skills}>
                                {skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        skillName={skill.name}
                                        skillVal={skill.level}
                                    />
                                ))}
                                
                            </div>
                        </div>

                        <div className={IndexCss.experienceWrapper}>
                            {experienceData.map(ex => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    key={ex.id}
                                >
                                    <Experience
                                    
                                        experienceName={ex.name}
                                        exFromDate={ex.from}
                                        exToDate={ex.to}
                                        company={ex.company}
                                        skillsList={ex.skills}
                                    />
                                </motion.div>
                                
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                

            </section>

            <section id="projects" className={IndexCss.projects_container}>
                <h2 className={IndexCss.sectionTitle}>My Projects</h2>
                <div className={IndexCss.projects}>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            imgSrc={project.image}
                            projectName={project.name}
                            projectContent={project.content}
                        />
                    ))}
                </div>
            </section>

            <section id="contact" className={IndexCss.contact_wrapper}>
                <h2 className={IndexCss.sectionTitle}>Get in Touch</h2>
                <div className={IndexCss.contact}>
                    <form className={IndexCss.contact_form}>
                        <h4>Send Message</h4>
                        <div className={IndexCss.inpur_wrapper}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div className={IndexCss.inpur_wrapper}>
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone number" />
                        </div>

                        <textarea placeholder="Message"></textarea>
                        <button>submit</button>
                    </form>
                    <div className={IndexCss.contactDeteils}>
                        <h4>Contact info</h4>
                        <div className={IndexCss.info_wrapper}>
                            <i className="ri-phone-line"></i>
                            <span>+020 1500 0851 45</span>

                        </div>
                        <div className={IndexCss.info_wrapper}>
                            <i className="ri-mail-line"></i>
                            <span>mohamedyousiefo3@gmail.com</span>
                        
                        </div>
                        <div className={IndexCss.info_social}>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-facebook-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-youtube-line"></i>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className={IndexCss.footer}>
                <div className={IndexCss.footerLinks}>
                    <a href="#">Home</a>
                    <a href="#About">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>
                <p>@copyright 2025 all rights reserved</p>
            </section>
            
        </>
    );
}
export default Index