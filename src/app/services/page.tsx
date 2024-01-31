
import React from 'react';
import Image from 'next/image';

export default function ServicesPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0">
                <Image
                    src="/flower.jpg" // Replace with your image path
                    alt="Services"
                    width={500}
                    height={300}
                    layout="responsive"
                />
            </div>
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Our Services</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Special Needs Childcare</h2>
                    <p>
                        We provide specialized care for children with special needs, creating a nurturing and supportive environment to encourage their development and well-being.
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Behavioral Support</h2>
                    <p>
                        Our expertise in behavioral techniques ensures that children with behavioral challenges receive the attention and tailored support they need.
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Autism Care</h2>
                    <p>
                        With a focus on children on the autism spectrum, we engage in activities designed to foster communication, social skills, and personal growth.
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Educational Activities</h2>
                    <p>
                        Learning is fun with our range of educational activities that are designed to be both engaging and informative, catering to each child's unique learning style.
                    </p>
                </div>
            </div>
        </div>
    );
}
