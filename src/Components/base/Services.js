import React from "react"
import { motion } from "framer-motion"

const ourServices = [
  {
    name: "UI/UX Design",
    img: "./assets/wd1.png",
    desc: "Intuitive design is vital for the success of any digital product. You can improve conversions with the help of our UI/UX design and development services ‒ by turning complex interactions into simple flows.",
  },
  {
    name: "Product Development",
    img: "./assets/wd2.png",
    desc: "ORIL develops secure, robust, and scalable solutions across multiple industries. From market research and design to development, launch, and support, we provide full-cycle product development services.",
  },
  {
    name: "IoT Development",
    img: "./assets/wd3.png",
    desc: "We provide a full spectrum of services: design, development, and launching the connected IoT solutions. We believe that the future holds big promise for IoT and companies embracing it!",
  },
  {
    name: "Digital Transformation",
    img: "./assets/wd4.png",
    desc: "The modern world offers unique strategic opportunities for lots of businesses. The key is to capture the ones that matter most and execute them. Digital transformation will completely shift the way you deliver value to customers, solve problems, and support your team.",
  },
]

const Services = () => {
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

  return (
    <div className="serviceSecion">
      <h1 style={{ textAlign: "center", fontSize: 25 }}>Services We Deliver</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            margin: 30,
            width: "100%",
            padding : "0px 300px",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            rowGap: 50,
          }}
        >
          {ourServices.map((item, inx) => {
            return (
              <motion.div
                viewport={{ once: true, amount: 0.2 }}
                whileInView="onscreen"
                initial="offscreen"
                key={inx}
                variants={variants}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <img width={200} src={item.img} alt={`Our Service ${inx}`} />
                <h1 style={{ textAlign: "center", fontSize: 22 }}>
                  {item.name}
                </h1>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    marginTop: 10,
                    opacity: 0.7,
                  }}
                >
                  {item.desc}
                </p>

                <a
                  className="learnMore"
                  href="/"
                  style={{ marginTop: 10, color: "var(--secondary-color)" }}
                >
                  Learn more
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Services
