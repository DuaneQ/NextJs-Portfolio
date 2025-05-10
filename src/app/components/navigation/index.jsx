import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const radius = 200; // Adjust the radius as needed

    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
            <div className="flex relative items-center justify-center hover:pause animate-spin-slow group">
                {
                    BtnList.map((btn, index) => {
                        const angleRad = (index * angleIncrement * Math.PI) / 180;
                        const x = radius * Math.cos(angleRad); // Calculate x position
                        const y = radius * Math.sin(angleRad); // Calculate y position

                        return (
                            <NavButton key={btn.label} x={x} y={y} {...btn} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Navigation;