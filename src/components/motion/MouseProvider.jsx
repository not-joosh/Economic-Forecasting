import { useEffect } from "react";

export const MouseProvider = () => {
    useEffect(() => {
        const cursor = document.querySelectorAll('.cursor');
        const links = document.querySelectorAll('a');
        const buttons = document.querySelectorAll('button');
        
        const handleMouseEnter = () => {
            cursor.forEach((element) => {
                element.classList.add('hover');
            });
        };
        
        const handleMouseLeave = () => {
            cursor.forEach((element) => {
                element.classList.remove('hover');
            });
        };
        
        const handleMouseMove = (event) => {
            cursor.forEach((element) => {
                element.style.left = `${event.pageX}px`;
                element.style.top = `${event.pageY}px`;
            });
        };
        
        links.forEach((link) => {
            link.addEventListener('mouseenter', handleMouseEnter);
            link.addEventListener('mouseleave', handleMouseLeave);
        });
        
        buttons.forEach((button) => {
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
        });
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            links.forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnter);
                link.removeEventListener('mouseleave', handleMouseLeave);
            });
            
            buttons.forEach((button) => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            });
            
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return (
        <>
            <div className='cursor inner z-30'></div>
            <div className='cursor outer z-30'></div>
        </>
    );
};
