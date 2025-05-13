"use client";
import { BtnList } from '@/app/data';
import React from 'react';
import NavButton from './NavButton';
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length; // Divide 360 degrees by the number of buttons
    const screenSize = useScreenSize();

    const isMedium = screenSize >= 768;
    const isLargeScreen = screenSize >= 1024;

    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
            <ResponsiveComponent>
                {({ size }) => {
                    if (size && size >= 480) {
                        return (
                            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                                {/* Circular layout */}
                                {
                                    BtnList.map((btn, index) => {
                                        const radius = isLargeScreen ? 300 : isMedium ? 250 : 200;
                                        const angleRad = (index * angleIncrement * Math.PI) / 180; // Convert angle to radians
                                        const x = radius * Math.cos(angleRad); // Calculate x position
                                        const y = radius * Math.sin(angleRad); // Calculate y position
                                        return (
                                            <NavButton
                                                key={btn.label}
                                                x={x}
                                                y={y}
                                                {...btn}
                                            />
                                        );
                                    })
                                }
                            </div>
                        );
                    } else {
                        // Stacked layout for smaller screens
                        return (
                            <>
                                {/* Left side buttons */}
                                <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden">
                                    {
                                        BtnList.slice(0, BtnList.length / 2).map((btn) => (
                                            <NavButton key={btn.label} x={0} y={0} {...btn} />
                                        ))
                                    }
                                </div>
                                {/* Right side buttons */}
                                <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden">
                                    {
                                        BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => (
                                            <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
                                        ))
                                    }
                                </div>
                            </>
                        );
                    }
                }}
            </ResponsiveComponent>
        </div>
    );
};

export default Navigation;
