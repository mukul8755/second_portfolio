import React from 'react';
import Button from './common/Button';
const Project = () => {
    const sectionStyle = {
        // background: '#CADCFC', // Updated background gradient
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 64px)', // Adjusted height to fit screen minus header height (assuming header is 64px)
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        textAlign: 'center',
        padding: '2rem'
    };

    return (
        <section className="services border-2 bg-gradient-to-l from-blue-300" style={sectionStyle}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-black mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                    <div className="bg-white rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <i className="fas fa-laptop-code text-5xl text-blue-500 mb-4"></i>
                        <div className="text-xl text-blue-500 font-semibold mb-2">Web Design</div>
                        <p className="text-gray-700 mb-4">Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <a href="https://github.com/mukulprogrammer/Portfolio" target="_blank" rel="noopener noreferrer">
                                View Project </a>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <i className="fas fa-user-secret text-5xl text-blue-500 mb-4"></i>
                        <div className="text-xl text-blue-500 font-semibold mb-2">User Secret</div>
                        <p className="text-gray-700 mb-4">I ensure that there is no sensitive data included in the source code and all sensitive data are stored securely outside of the project folder.</p>
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <a href="https://github.com/mukulprogrammer/Portfolio" target="_blank" rel="noopener noreferrer">
                                View Project </a>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <i className="fas fa-code text-5xl text-blue-500 mb-4"></i>
                        <div className="text-xl text-blue-500 font-semibold mb-2">Apps Design</div>
                        <p className="text-gray-700 mb-4">Apps design encompasses both the user interface (UI) and user experience (UX), including style elements like color schemes, font selections, and widget types.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <a href="https://github.com/mukulprogrammer/Portfolio" target="_blank" rel="noopener noreferrer">
                                View Project </a>
                        </button>
                    </div>
                </div>
            </div>
            <Button />
        </section>
    );
};

export default Project;
