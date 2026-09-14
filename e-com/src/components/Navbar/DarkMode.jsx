import React from 'react';
import LightButton from '../../assets/New folder/light.svg';
import DarkButton from '../../assets/New folder/dark.svg';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ?localStorage.g : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]); // ✅ only run when theme changes

  

  return (
    <div className='relative'>
      <img
        src={LightButton}
        alt="Toggle Theme"
        onClick={() => setTheme(theme === 'light' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute z-10 right-0 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
      />
        <img
            src={DarkButton}
            alt="Toggle Theme"
            onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}
            className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  "/>
    </div>
  );
};

export default DarkMode;
