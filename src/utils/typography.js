import Typography from "typography";
import spaceGrotesk from "typeface-spacegrotesk";
import inconsolata from "typeface-inconsolata";

const options = {
  bodyFontFamily: ['Inconsolata', 'serif'],
  headerFontFamily: ['Space Grotesk', 'sans-serif'],
};

const typography = new Typography(options);
// Export helper functions
export const { scale, rhythm } = typography;

export default typography;