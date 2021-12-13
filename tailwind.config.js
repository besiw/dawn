const rem = {
	0: '0',
	1: '0.25rem',
	2: '0.5rem',
	3: '0.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	8: '2rem',
	10: '2.5rem',
	12: '3rem',
	14: '3.5rem',
	15: '3.75rem',
	16: '4rem',
	18: '4.5rem',
	20: '5rem',
	24: '6rem',
	28: '7rem',
	30: '7.5rem',
	32: '8rem',
	34: '8.5rem',
	36: ' 9rem',
	40: '10rem',
	48: '12rem',
	56: '14rem',
	64: '16rem'
};
const widthStandard = {
	...rem,
	auto: ' auto',
	px: ' 1px',
	'1/2': ' 50%',
	'1/3': ' 33.333333%',
	'2/3': ' 66.666667%',
	'1/4': ' 25%',
	'2/4': ' 50%',
	'3/4': ' 75%',
	'1/5': ' 20%',
	'2/5': ' 40%',
	'3/5': ' 60%',
	'4/5': ' 80%',
	'1/6': ' 16.666667%',
	'2/6': ' 33.333333%',
	'3/6': ' 50%',
	'4/6': ' 66.666667%',
	'5/6': ' 83.333333%',
	'1/12': ' 8.333333%',
	'2/12': ' 16.666667%',
	'3/12': ' 25%',
	'4/12': ' 33.333333%',
	'5/12': ' 41.666667%',
	'6/12': ' 50%',
	'7/12': ' 58.333333%',
	'8/12': ' 66.666667%',
	'9/12': ' 75%',
	'10/12': ' 83.333333%',
	'11/12': ' 91.666667%',
	xs: '380px',
	sm: '640px',
	md: '768px',
	'lg-inner': '1000px',
	lg: '1140px',
	xl: '1280px',
	hd: '1440px',
	mobile: '380px',
	tablet: '768px',
	laptop: '1140px',
	desktop: '1440px'
	/*   'desktop': '1280px' */
};

const heightStandard = {
	...rem,
	auto: 'auto',
	px: '1px'
};


module.exports = {
/*   purge: {
    enabled: true,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid'
    ]
  }, */
  corePlugins: {
    preflight: false,
   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			width: widthStandard,
			height: heightStandard,
			minWidth: widthStandard,
			maxWidth: widthStandard,
			minHeight: heightStandard,
			maxHeight: heightStandard,
      		padding: {
				quarter: '25%',
				half: '50%',
				square: '100%',
				'16/9': '56.25%'
			},
			colors:{

				"theme-accent-one":"rgb(var(--color-base-accent-1))",
				"theme-accent-two":"rgb(var(--color-base-accent-2))",
				"theme-bg-one":"rgb(var(--color-base-background-1))",
				"theme-bg-two":"rgb(var(--color-base-background-2))",
			}
      
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}