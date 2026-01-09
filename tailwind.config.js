import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
        thin: '0.5px',
        thick: '2px',
      },
      textStrokeColor: {
        DEFAULT: 'currentColor',
        black: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'b1-card-body': "linear-gradient(80deg, rgba(33,58,89,0.95) 0%, rgba(12,100,122,0.95) 86%)",
        'hero-body': "linear-gradient(0deg, rgba(0,42,58,1) 0%, rgba(0,42,59,0.2238095067128414) 78%)",
        'sub-hero': "linear-gradient(306deg, rgba(238,174,202,1) 0%, rgba(0,42,58,1) 14%)"
      },
      screens: {
        'ipad': "767px"
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [tailwindcssAnimate,
    function ({addUtilities}) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'currentColor',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'rgba(0,0,0,0.3)',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#FFF',
        },
        '.text-stroke-thin': {
          '-webkit-text-stroke-width': '0.5px',
        },
        '.text-stroke-thick': {
          '-webkit-text-stroke-width': '2px',
        },
      });
    },
  ],
};
export default config;