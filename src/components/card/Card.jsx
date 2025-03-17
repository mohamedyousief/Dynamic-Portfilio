import CardCss from "./../card/Card.module.css"
import { motion } from "framer-motion";
function Card({title,imgSrc}) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="box"
            >
                <div className={CardCss.aboutCard}>
                    <img src={imgSrc} alt="frontend" />
                    <div className={CardCss.aboutCardContent}>
                        <h3>{title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat tempore fugit excepturi nemo mollitia!</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Card



