import React from 'react';

function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-12">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                {/* Footer Content */}
                <div className="space-y-6 text-sm">
                    <p>
                        1. Tesla is an electric vehicle and clean energy company that designs,
                        manufactures, and sells electric vehicles, battery energy storage from
                        home to grid scale, solar panels and solar roof tiles, and related products
                        and services. Tesla is an electric vehicle and clean energy company that designs,
                        manufactures, and sells electric vehicles, battery energy storage from
                        home to grid scale, solar panels and solar roof tiles, and related products
                        and services.
                    </p>
                    <p>
                        2. Our mission is to accelerate the world's transition to sustainable energy
                        through innovative products, exceptional customer service, and a commitment
                        to environmental responsibility. We're constantly pushing the boundaries
                        of technology and sustainability to create the future of transportation.
                        Our mission is to accelerate the world's transition to sustainable energy
                        through innovative products, exceptional customer service, and a commitment
                        to environmental responsibility. We're constantly pushing the boundaries
                        of technology and sustainability to create the future of transportation.
                    </p>
                    <p>
                        3. Tesla vehicles are designed for performance, safety, and minimal environmental
                        impact. From the electric motors to the autopilot systems, every component is
                        engineered for optimal efficiency and sustainability, reducing reliance on
                        fossil fuels and providing a driving experience like no other. Tesla vehicles are designed for performance, safety, and minimal environmental
                        impact. From the electric motors to the autopilot systems, every component is
                        engineered for optimal efficiency and sustainability, reducing reliance on
                        fossil fuels and providing a driving experience like no other.
                    </p>
                    <p>
                        4. We are committed to making clean energy accessible to everyone. Through
                        our solar products and energy storage solutions, we aim to reduce the
                        reliance on traditional, polluting energy sources and create a more sustainable
                        future for generations to come. We are committed to making clean energy accessible to everyone. Through
                        our solar products and energy storage solutions, we aim to reduce the
                        reliance on traditional, polluting energy sources and create a more sustainable
                        future for generations to come.
                    </p>
                    <p>
                        5. Join us in our mission to revolutionize the way the world produces and consumes
                        energy. Whether you're driving a Tesla or using our clean energy solutions,
                        you're helping make a difference in the world by choosing sustainable alternatives
                        for a better tomorrow. Join us in our mission to revolutionize the way the world produces and consumes
                        energy. Whether you're driving a Tesla or using our clean energy solutions,
                        you're helping make a difference in the world by choosing sustainable alternatives
                        for a better tomorrow.
                    </p>
                    <div className="flex items-center justify-center space-x-3 p-4 font-bold text-gray-500">
                        <a href="#">Tesla @ 2024</a>
                        <a href="#">Privacy & Legal</a>
                        <a href="#">Vechile Recall</a>
                        <a href="#">Contacts</a>
                        <a href="#">News</a>
                        <a href="#">Gets update</a>
                        <a href="#">Location</a>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="border-t border-gray-300 pt-8">
                <p className="text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Tesla, Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
