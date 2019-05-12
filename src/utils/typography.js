import Typography from "typography";

const typography = new Typography({
  bodyFontFamily: ['Inconsolata', 'serif']
});

// Export helper functions
export const { scale, rhythm, options } = typography;

typography.googleFonts = [
  {
    name: 'Inconsolata',
    styles: [
      '400'
    ]
  }
]

export default typography;