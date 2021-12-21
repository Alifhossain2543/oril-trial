import React, { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'

const specializeItem = [
  {
    title: "PropTech",
    desc: "Given the pace of technology development, innovation in real estate is long overdue. Everything about owning, leasing, property management, and even navigating upfront government hurdles should become easier, both for owners and tenants. We help businesses lead new ways in the Real Estate industry.",
    image: "./assets/sp1.png",
  },
  {
    title: "FinTech",
    desc: "Whether it's consumer banking, commercial lending, or trading, startups are taking over every industry imaginable. Having worked on multiple financial services over the years, we are happy to bring our expertise to your team.",
    image: "./assets/sp2.png",
  },
  {
    title: "Marketplace",
    desc: "ORIL develops engaging online marketplace platforms that drive traffic, boost conversion, and increase sales. We build high-quality, scalable, and successful platforms that your users will love.",
    image: "./assets/sp3.png",
  },
  {
    title: "Health & Fitness",
    desc: "Medical professionals are slowly embracing technology in their practice. The general public is also waking up to the importance of staying healthy. Now is the best time to tap into this niche. ORIL team develops interactive, creative, secure, and HIPAA compliant solutions that fulfill people's needs in healthcare, fitness, and lifestyle.",
    image: "./assets/sp4.png",
  },
]


const SpMenuSection = () => {
      const [selectedTab, setSelectedTab] = useState(specializeItem[0])

  
    return (
      <div className="spSection">
        <h1>
          We Specialize in{" "}
          <span style={{ color: "var(--primary-color)" }}>:</span>
        </h1>

        <div className="sectionContainer">
          <nav>
            <ul
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: 50,
              }}
            >
              {specializeItem.map((item) => (
                <li
                  style={{ fontSize: 24 }}
                  key={item.title}
                  className={item.title === selectedTab.title ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.title}`}
                  {item.title === selectedTab.title ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab.title ? selectedTab.title : "empty"}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.15 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      gap: 40,
                    }}
                  >
                    <img
                      style={{ maxWidth: "100%", height: 350 }}
                      src={selectedTab.image}
                      alt={selectedTab.title}
                    />
                    <div>
                      <p style={{ userSelect: "text" }}>{selectedTab.desc}</p>

                      <button
                        style={{
                          borderRadius: 20,
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 20,
                          backgroundColor: "var(--primary-color)",
                          marginTop: 30,
                          cursor: "pointer",
                        }}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    )
}

export default SpMenuSection
