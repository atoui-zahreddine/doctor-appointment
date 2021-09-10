module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        50: '50%',
      },
      borderColor: { A9D5FC: '#A9D5FC' },
      textColor: {
        '252B42': '#252B42',
        '24A6F0': '#24A6F0',

        navText: '#737373',
      },
      backgroundColor: {
        '8EC2F2': '#8EC2F2',
        header: '#F7F7F7',
        '252B42': '#252B42',
        '24A6F0': '#24A6F0',
        features: '#D9EDFD',
        btn: {
          primary: '#23A6F0',
          secondary: '#23A6F0',
        },
      },
      backgroundImage: {
        hero: "url('assets/img/hero.jpg')",
      },
      width: {
        192: '40rem',
      },
      height: {
        192: '48rem',
      },
      animation: {
        togle: 'toggle-nav 0.5s easy-in-out',
      },
      Keyframes: {
        'toggle-nav': {
          '0%': { height: '0' },
          '100%': { height: 'auto' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
