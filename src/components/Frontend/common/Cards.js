"use client";

import React from 'react';

const Cards = (post) => {
    return (
        <div className="mb-4 border rounded p-4 flex items-center">
            <div className="mr-4" style={{ width: '180px', height: '80px' }}>
                <img src={process.env.REACT_APP_ASSET_URL + post.data.image} alt="Post" />
            </div>
            <div>
                <a href={`/blog/${post.data.slug}`}>
                    <h2 className="text-xl font-semibold">{post.data.name}</h2>
                    <p className="text-gray-600">{post.data.content}</p>
                </a>
            </div>
        </div >
    );
};

export default Cards;
