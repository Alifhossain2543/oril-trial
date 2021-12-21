import React from 'react'
import { motion } from 'framer-motion'

const Solutions = () => {

      const variants = {
        offscreen: {
          x: "100%",
        },
        onscreen: {
          x: 0,
          transition: {
            type: "spring",
            duration: 0.7,
          },
        },
      }

       const variantsTwo = {
         offscreen: {
           x: "-100%",
         },
         onscreen: {
           x: 0,
           transition: {
             type: "spring",
             duration: 0.7,
           },
         },
       }

    return (
      <div className="solutionSection">
        <h1>Building Solutions that Work</h1>

        <p style={{ marginTop: 20, opacity: 0.7 }}>
          We make things happen. Always. Our high-powered tech experts set up
          the entire development processes, detect problems, and solve them.
        </p>

        <div
          style={{
            width: "100%",
            display: "flex",
            gap: 30,
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
            variants={variants}
          >
            <img
              alt="App"
              src="./assets/app1.png"
              style={{ maxWidth: "100%", padding: "5px 20px" }}
            />
          </motion.div>
          <motion.div
            variants={variantsTwo}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
          >
            <h1>LUCA App</h1>
            <h4
              style={{
                color: "var(--secondary-color)",
                marginTop: 20,
                wordSpacing: 20,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              #HealthTech #MobileApp #Platform #UI/UX Design #WebApp
            </h4>
            <p style={{ marginTop: 20, opacity: 0.6, lineHeight: 1.8 }}>
              Medibio is a mental health technology company pioneering the use
              of objective measures to aid in the early detection and screening
              of mental health conditions. They offer mental wellbeing solutions
              for individuals through their new consumer app, LUCA and for
              businesses through our Corporate Health product, Ilumen. Medibio
              is also developing products to serve the healthcare provider
              market.
            </p>
            <div
              className="customButton"
              style={{
                border: "1px solid var(--primary-color)",
                width: 170,
                padding: "10px",
                borderRadius: 20,
              }}
            >
              <a
                style={{ paddingRight: 5, color: "var(--secondary-color)" }}
                href="/"
              >
                View Project{" "}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
}

export default Solutions
