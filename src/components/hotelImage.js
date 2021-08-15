import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.7),
    rgba(34, 49, 63, 0.7)
  );
  color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.6rem;
    }
  }
`

//TO DO-> search the right way to show an image

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "9.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <ImageText>
          <h1>Looking to relax and chill out?</h1>
          <p>Our hotel is the right choice</p>
        </ImageText>
      </ImageBackground>
    </div>
  )
}

export default HotelImage
