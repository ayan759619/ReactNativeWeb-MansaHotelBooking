import { config as defaultConfig } from "@gluestack-ui/config";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      // White and off-white shades for background and UI elements
      primary0: "#ffffff",         // Pure white
      primary50: "#F9F9F7",        // Light off-white
      primary100: "#F5F3EF",       // Very light beige

      // Gold and metallic shades for accents and highlights
      primary200: "#F4E2C3",       // Light gold
      primary300: "#EED9A6",       // Soft gold
      primary400: "#E3C87E",       // Muted gold
      primary500: "#D4AF37",       // Gold
      primary600: "#C4951F",       // Deeper gold
      primary600_alpha60: "#E4C88299", // Gold overlay effect (translucent)

      // Dark gold and black shades for text and high contrast elements
      primary700: "#A37813",       // Dark gold
      primary800: "#5A4D29",       // Deep gold-brown
      primary900: "#3D3D3B",       // Charcoal black
      primary950: "#1A1A1A",       // Almost black

      // Additional colors for success, warning, and error states (optional)
      success: "#82C91E",          // Light green for success
      warning: "#FFD600",          // Bright yellow for warning
      error: "#E63946",            // Red for error
    },
  } as const,
};

type Config = typeof config;
declare module "@gluestack-ui/config" {
  interface IConfig extends Config {}
}
