import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(localStorage.getItem('portfolioTheme') || 'dark');

    function handleThemeToggle() {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        localStorage.setItem('portfolioTheme', theme);
        document.getElementById('root').classList.remove('dark', 'light');
        document.getElementById('root').classList.add(theme);
    }, [theme]);

    return {
        theme,
        SwitcherComponent: (
            <button
                onClick={handleThemeToggle}
                className="z-[10000000] h-14 w-14 rounded-full bg-slate-400 dark:bg-gray-400 absolute right-5 top-2"
            >
                {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        ),
    };
};

export default ThemeSwitcher;
