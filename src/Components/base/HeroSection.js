import React from "react"

const HeroSection = () => {
  const sponsorItem = [
    "./assets/sponsor1.png",
    "./assets/sponsor2.png",
    "./assets/sponsor3.png",
    "./assets/sponsor4.png",
  ]

  return (
    <div className="heroSection">
      <div className="tileSection">
        <h1 style={{ opacity : 0.8, lineHeight: 1.3}}>
          Your go-to partner for building incredible digital products{" "}
          <span style={{ color: "var(--primary-color)" }}>.</span>
        </h1>

        <p className="heroDesc" >
          We help businesses win new markets with innovative solutions that
          disrupt industries.
        </p>

        <div className="customButton">View Case Study </div>

        {/* Sponsor button */}
        <div className="sponsorSection">
          {sponsorItem.map((item, inx) => {
            return (
              <div key={inx} style={{ maxHeight: 48, maxWidth: "100%" }}>
                <img src={item} height={48} alt={`sponsor ${inx}`} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="imageSeciton">
        <img src="./assets/heroImage.jpg" alt="heroImage" />
      </div>
    </div>
  )
}

export default HeroSection
