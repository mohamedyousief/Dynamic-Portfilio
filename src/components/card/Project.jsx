import CardCss from "./../card/Card.module.css"
import { motion } from "framer-motion";
export const Project = ({
    imgSrc,
    projectName,
    projectContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className={CardCss.project}>
                <img src={imgSrc} alt="" />
                <div className={CardCss.project_content}>
                    <h3>{projectName}</h3>
                    <p>{projectContent}</p>
                    <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </motion.div>
      
    );
}
