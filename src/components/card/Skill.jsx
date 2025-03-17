import CardCss from "./../card/Card.module.css"
import { motion } from "framer-motion";
export default function Skill({ skillName ,skillVal }) {
    return (
        <div className={CardCss.skill}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="box"
            >
                <h4>{skillName}</h4>
                <div className={CardCss.skill_bar} data-value={skillVal} style={{ "--skillVal": skillVal }} ></div>
            </motion.div>
        </div>
    );
}