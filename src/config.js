module.exports = {
  email: 'info@webuntu.cloud',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/webuntucloudsolutions',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/webuntucloudsolutions',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#cc998d',
    navy: '#0a192f',
    darkNavy: '#0a192f',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
