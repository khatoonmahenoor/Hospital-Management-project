import React from 'react';

export let Home = () => {
    const containerStyle = {
        backgroundImage: `url("/images/hphoto.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#65B741', 
    };

    return (
        <>
            <div style={containerStyle}>
                <h3 style={{color: 'green', fontSize: '50px', fontFamily: 'fantasy'}}>Welcome To My Hospital</h3>
                <p>Hospitals use catchy slogans & taglines to tell their potential customers about their services, their uniqueness or how they are better from their competitors.</p>
            </div>
        </>
    );
};
