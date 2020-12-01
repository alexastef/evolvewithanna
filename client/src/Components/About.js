import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about-section">
      <Fade bottom cascade>
      <div className="about">
        <p>
        This is a 2 week fundraising campaign created for Anna with Community and Support at the forefront of our minds.
      </p> 
      <p>
        Our dear friend and teacher has been diagnosed with Ewing Sarcoma, a rare type of Bone Cancer. Her treatments have already begun and to show she is not in this fight alone we have designed these shirts. We are stronger together and our hope is that they will help lift her up in these trying times.
      </p> 
      <p>
        Please share this page so we can reach family, friends, and students both near and far. Vuroi has generously donated their product and we hope to see you around town sporting your Evolve with Anna gear. All proceeds will go directly to Chris and Anna to help with medical expenses. If you do not wish to buy a shirt, monetary donations are also appreciated. Thank you in advance!
      </p>

      <p><strong>XO Ash and Alexa</strong></p>
      </div>
      <div className="ways-to-donate">
      <p>To keep updated: <a href="https://www.caringbridge.org/visit/annaspalding">Caring Bridge</a></p>
      <p>For monetary or other donations, please search Anna Spalding on GoFundMe or reach out directly to Ashleigh at copas5983@gmail.com</p>
      <p>Shop more from Vuori <a href="https://www.vuoriclothing.com">here!</a></p>
      </div>
      </Fade>
    </div>
  )
}