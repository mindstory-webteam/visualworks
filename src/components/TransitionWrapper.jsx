import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const TransitionWrapper = ({ children }) => {
    const transitionOverlayRef = useRef(null)
    const svgPathRef = useRef(null)
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth < 640;

        if (isMobile) {
            setIsFinished(true);
            if (transitionOverlayRef.current) {
                transitionOverlayRef.current.style.display = 'none';
            }
            return; 
        }

        const path = svgPathRef.current;
        const pathLength = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            strokeWidth: 2,
            opacity: 1 
        });

        const tl = gsap.timeline();

        tl.to(transitionOverlayRef.current, {
            opacity: 1,
            duration: 0.1
        })
        .to(path, {
            strokeDashoffset: 0,
            strokeWidth: 500, 
            duration: 1.2,
            ease: "power2.inOut"
        })
        .call(() => {
            setIsFinished(true);
        })
        .to(path, {
            strokeDashoffset: -pathLength,
            strokeWidth: 2,
            duration: 1.0,
            ease: "power2.inOut"
        })
        .to(transitionOverlayRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                if (transitionOverlayRef.current) {
                    transitionOverlayRef.current.style.display = 'none';
                }
            }
        }, "-=0.3");

        return () => tl.kill();
    }, []);

    return (
        <>
            <div 
                ref={transitionOverlayRef} 
                className="hidden sm:flex fixed inset-0 items-center justify-center z-9999 pointer-events-none"
                style={{ backgroundColor: isFinished ? 'transparent' : 'white' }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1316 664"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full scale-150 h-full"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path
                        ref={svgPathRef}
                        style={{ opacity: 0 }} 
                        d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
                        stroke="#FF8C00"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={`sm:${!isFinished ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                {children}
            </div>
        </>
    )
}

export default TransitionWrapper;