import React from 'react';
import Section from './Section';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Section
        title="$299/mo Leasing"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-APR-Promo-Hero-Desktop-v3.png"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="$299/mo Leasing From $31,4901"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="$299/mo Leasing From $29,9902"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="From $65,9903 After Federal Tax Credit $7,500 and Est."
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-US.png"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Free Supercharging Included"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-US.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Cybertruck"
        description="Lease Starting at $899/mo5"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-v3.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
       <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
       <Section
        title="Powerwall"
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      
      <Section
        title="Accessories"
        description=""
        backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-US.png"
        LeftBtnText="Shop Now"
      />
    </div>
  );
}

export default Home;
