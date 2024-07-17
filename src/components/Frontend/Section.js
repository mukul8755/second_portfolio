import React from 'react';

const SectionPage = () => {
    return (
        <section className="bg-gradient-to-l from-blue-300 py-2 md:py-20">
            <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:space-x-10">
                <div className="w-full md:w-1/2 mt-5 p-2">
                    <div className="text-4xl font-bold text-black mb-4">Hello, My name is Abhishek</div>
                    <p className="text-xl text-black mb-8">
                        I'm a passionate Web Developer with experience in building responsive and user-friendly web applications.
                        My expertise includes frontend technologies like React, HTML, CSS, and JavaScript.
                        I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                    <a href="/contact" className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">
                        Hire me
                    </a>
                </div>
                <div className="w-full md:w-1/2  md:mt-0">
                    <img src="/images/dev.jpg" alt="Developer" className="rounded-lg shadow-lg w-full" />
                </div>
            </div>
        </section>
    );
};

export default SectionPage;
