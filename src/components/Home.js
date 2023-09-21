import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model 3"
            description="After Federal Tax Credit & Est. Gas Savings"
            backgroundImg='model-3.jpg'
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            title="Model Y"
            description="After Federal Tax Credit & Est. Gas Savings"
            backgroundImg='model-y.jpg'
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            title="Model S"
            description="After Est. Gas Savings"
            backgroundImg='model-s.jpg'
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="After Federal Tax Credit & Est. Gas Savings"
            backgroundImg='model-x.jpg'
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            title="Solar Panels"
            description="Schedule a Virtual Consultation"
            backgroundImg='solar-panel.jpg'
            LeftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg='solar-roof.jpg'
            LeftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg='accessories.jpg'
            LeftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`

`