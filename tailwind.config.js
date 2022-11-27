module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    fontFamily: {
      mono: 'sans',
      inter: 'Inter',
      space_grotesk: '"Space Grotesk"'
    },
    fontSize: {
      p5: '12px',
      p4: '14px',
      p3: '16px',
      p2: '18px',
      p1: '20px',
      h4: '24px',
      h3: '30px',
      h2: '34px',
      h1: '38px',
      display: '70px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    spacing: {
      xxs: '4px',
      xs: '8px',
      md: '16px',
      xmd: '24px',
      lg: '32px',
      xlg: '40px',
      xxlg: '64px',
      xxxlg: '96px'
    },
    colors: {
      primary: '#EB2F93',
      secondary: '#712DE0',
      text: '#FFFFFF',
      gray100: '#B3B0B8',
      gray200: '#7C7A80',
      black: '#000000',
      black100: '#101114',
      black200: '#1E1F24',
      black300: '#2B2C33',
      black400: '#454652'
    }
  },
  plugins: []
}
