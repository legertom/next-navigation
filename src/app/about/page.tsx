// pages/about.tsx or app/about/page.tsx
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
            <div className="flex-1">
                {/* Replace with your image path */}
                <Image
                    src="/flower.jpg" 
                    alt="About Us"
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">About Jada</h1>
                <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                    lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                    ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                </p>
                <p>
                    Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam
                    nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
                    pretium a, enim. Pellentesque congue.
                </p>
            </div>
        </div>
    );
}
