module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    theme: {
        colors: {
          'text-main': {
            DEFAULT: '#2a2f45'
          },
            'amp-blue': {
                DEFAULT: '#1E61F0',
                50: '#CADAFB',
                100: '#B7CCFA',
                200: '#91B2F8',
                300: '#6A97F5',
                400: '#447CF3',
                500: '#1E61F0',
                600: '#0D49C9',
                700: '#0A3694',
                800: '#06235F',
                900: '#03102B',
                950: '#010610'
            },
            'dark-blue': {
                DEFAULT: '#0D1F91',
                50: '#6478F1',
                100: '#5267EF',
                200: '#2C46EC',
                300: '#142FDC',
                400: '#1027B6',
                500: '#0D1F91',
                600: '#08145E',
                700: '#04092A',
                800: '#000000',
                900: '#000000',
                950: '#000000'
            },
            'dark-purple': {
                DEFAULT: '#2F1761',
                50: '#8158D7',
                100: '#7548D4',
                200: '#5F2EC4',
                300: '#4F27A3',
                400: '#3F1F82',
                500: '#2F1761',
                600: '#190C34',
                700: '#030106',
                800: '#000000',
                900: '#000000',
                950: '#000000'
            },
            'red': {
                DEFAULT: '#F54F4F',
                50: '#FFFDFD',
                100: '#FEE9E9',
                200: '#FCC3C3',
                300: '#F99C9C',
                400: '#F77676',
                500: '#F54F4F',
                600: '#F21A1A',
                700: '#C80B0B',
                800: '#930808',
                900: '#5E0505',
                950: '#440404'
            },
            'dark-teal': {
                DEFAULT: '#0F4F73',
                50: '#51B2E8',
                100: '#3FAAE6',
                200: '#1D99DF',
                300: '#1881BB',
                400: '#146897',
                500: '#0F4F73',
                600: '#092D41',
                700: '#020B10',
                800: '#000000',
                900: '#000000',
                950: '#000000'
            },
            'light-teal': {
                DEFAULT: '#91D9E3',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#F3FBFC',
                300: '#D2EFF4',
                400: '#B2E4EB',
                500: '#91D9E3',
                600: '#64CAD8',
                700: '#38BACC',
                800: '#2994A2',
                900: '#1E6B76',
                950: '#18575F'
            },
            'light-blue': {
                DEFAULT: '#C1E0FE',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#E9F4FF',
                500: '#C1E0FE',
                600: '#8AC4FD',
                700: '#53A9FC',
                800: '#1B8DFB',
                900: '#0471DB',
                950: '#0363BF'
            },
            'grey': {
              DEFAULT: '#8c8c8c',
              50: '#f3f3f3',
              100: '#dcdcdc',
              200: '#bebebe',
              300: '#a4a4a4',
              400: '#a4a4a4',
              500: '#8c8c8c',
              600: '#6f6f6f',
              700: '#565656',
              800: '#3d3d3d',
              900: '#282828',
              950: '#171717'
            }

        },
        fontFamily: {
          sans: ['IBM Plex Sans', 'sans-serif'],
          mono: [ 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
        }
        // extend: {
        //     fontFamily: {
        //         display: "var(--font-display)",
        //         body: "var(--font-body)",
        //     }
        // },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    important: true
}
