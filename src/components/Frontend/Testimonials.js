import React from 'react';

const Testimonials = () => {
    const sectionStyle = {
        // background:'#CADCFC',
        minHeight: 'calc(100vh - 64px)', // Adjusted height to fit screen minus header height (assuming header is 64px)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        textAlign: 'center',
        padding: '2rem'
    };

    return (
        <section className="testimonials bg-gradient-to-r from-blue-300 to-blue-200" style={sectionStyle}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-black mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-xl text-blue-500 font-semibold mb-2">John Doe</div>
                        <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-xl text-blue-500 font-semibold mb-2">Jane Smith</div>
                        <p className="text-gray-700 mb-4">"Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum."</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-xl text-blue-500 font-semibold mb-2">Sam Wilson</div>
                        <p className="text-gray-700 mb-4">"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus."</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-xl text-blue-500 font-semibold mb-2">Emily Brown</div>
                        <p className="text-gray-700 mb-4">"Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
