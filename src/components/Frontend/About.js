import React, { useEffect, useState } from 'react';
import { useLoadingContext } from "react-router-loading";

const About = () => {
    const loadingContext = useLoadingContext();
    setInterval(function () { loadingContext.done() }, 1000);
    
    const [loading, setLoading] = useState(true);
    const [data, setAbout] = useState([]);
    const [experience, setExperience] = useState([]);
    const [degree, setDegree] = useState([]);
    const [skills, setSkills] = useState([]);

    // Simulated data for demonstration
    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                const mockData = {
                    degree: "Bachelor's in Computer Science, Master's in Web Development",
                    experience: 'Web Developer at Company A, Freelancer',
                    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
                };
                setAbout(mockData);
                setDegree(mockData.degree.split(','));
                setExperience(mockData.experience.split(','));
                setSkills(mockData.skills);
                setLoading(false);
            }, 1000); // Simulating API delay
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-200 py-10">
            <div className="max-w-screen-xl mx-auto p-10 border-b border-red-300">
                <div className=" rounded-lg shadow-lg p-10 border-red-300">
                    <h2 className="text-4xl font-semibold mb-8">About Me</h2>
                    <p>{data.degree}</p>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">Degrees & Education</h3>
                                <ul className="list-disc list-inside">
                                    {degree.map((deg, index) => (
                                        <li key={index} className="text-lg">{deg.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                                <ul className="list-disc list-inside">
                                    {experience.map((exp, index) => (
                                        <li key={index} className="text-lg">{exp.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                                <div className="flex flex-wrap">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="bg-green-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 text-lg">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">Projects</h3>
                                <p className="text-lg">Here you can add a brief overview of your major projects, linking to detailed project pages or repositories.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Hobbies & Interests</h3>
                                <p className="text-lg">In this section, you can share more about your personal interests and hobbies to give a more well-rounded picture of who you are.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Download Resume</h3>
                                <a  href="/" className="text-lg cursor-pointer border-2 p-3 bg-green-200 rounded-lg">Download</a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
