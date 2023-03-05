import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import RotationDefinition from './components/RotationDefinition/RotationDefinition';

function App() {

    const appContainerRef = useRef<any>(null);

    const options = {
        smooth: true,
    };

    return (
        <>
            <Header/>
            <Hero/>
            <RotationDefinition/>
            <Gallery/>
        </>
    );
}

export default App;
