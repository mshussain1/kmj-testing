module.exports = {
    content: [
        './config/livewire-datatables.php',
        './resources/views/components/backend/**/*.blade.php',
        './resources/views/components/common/**/*.blade.php',
        './resources/views/layouts/backend/**/*.blade.php',
        './resources/views/layouts/app.blade.php',
        './resources/views/livewire/datatables/**/*.blade.php',
        './resources/views/livewire/form/backend/**/*.blade.php',
        './resources/views/pages/backend/**/*.blade.php',
        './resources/views/vendor/form-components/tailwind-3/**/*.blade.php'
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: [
                '"Inter"',
                'system-ui',
                'sans-serif',
                '-apple-system',
                '"Segoe UI"',
                '"Helvetica Neue"',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            mono: [
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace'
            ]
        },
        boxShadow: {
            sm: '0 .125rem .25rem rgba(17, 38, 146, 0.1)',
            DEFAULT: '0 .5rem 1rem 0 rgba(17, 38, 146, 0.05)',
            md: '0 .5rem 1rem rgba(17, 38, 146, 0.05)',
            lg: '0 10px 30px 0 rgba(17, 38, 146, 0.05)',
            inner: 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.16)',
            active: '0 10px 20px -10px rgba(58,87,232, 0.4)',
            none: 'none'
        },
        extend: {
            zIndex: {
                '-10': '-10'
            },
            transitionTimingFunction: {
                'in-expo': 'ease'
            },
            textColor: {
                heading: '#232d42'
            },
            colors: {
                container: '#f5f6fa',
                body: '#f5f7fe',
                gray: {
                    100: '#f8f9fa',
                    200: '#e9ecef',
                    300: '#dee2e6',
                    400: '#ced4da',
                    500: '#adb5bd',
                    600: '#6c757d',
                    700: '#495057',
                    800: '#343a40',
                    900: '#212529'
                },
                blue: {
                    100: '#d8ddfa',
                    200: '#b0bcf6',
                    300: '#899af1',
                    400: '#6179ed',
                    500: '#3a57e8',
                    600: '#2e46ba',
                    700: '#23348b',
                    800: '#17235d',
                    900: '#0c112e'
                },
                red: {
                    100: '#f2d6d3',
                    200: '#e6ada6',
                    300: '#d9847a',
                    400: '#cd5b4d',
                    500: '#c03221',
                    600: '#9a281a',
                    700: '#731e14',
                    800: '#4d140d',
                    900: '#260a07'
                },
                orange: {
                    100: '#fce1d1',
                    200: '#f9c3a4',
                    300: '#f7a676',
                    400: '#f48849',
                    500: '#f16a1b',
                    600: '#c15516',
                    700: '#914010',
                    800: '#602a0b',
                    900: '#301505'
                },
                green: {
                    100: '#d1ecdd',
                    200: '#a3d9ba',
                    300: '#76c698',
                    400: '#48b375',
                    500: '#1aa053',
                    600: '#158042',
                    700: '#106032',
                    800: '#0a4021',
                    900: '#052011'
                },
                cyan: {
                    100: '#cdebec',
                    200: '#9cd7da',
                    300: '#6ac2c7',
                    400: '#39aeb5',
                    500: '#079aa2',
                    600: '#067b82',
                    700: '#045c61',
                    800: '#033e41',
                    900: '#011f20'
                },
                teal: {
                    100: '#d2f4ea',
                    200: '#a6e9d5',
                    300: '#79dfc1',
                    400: '#4dd4ac',
                    500: '#20c997',
                    600: '#1aa179',
                    700: '#13795b',
                    800: '#0d503c',
                    900: '#06281e'
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a'
                },
                zinc: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b'
                },
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917'
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717'
                },
                dark: {
                    bg: '#151824',
                    card: '#222738',
                    strip: 'rgba(138,146,166,0.03)'
                },
                sideblue: '#3a57e8',
                sideblack: '#212529',
                sidehover: '#ffffff20'
            }
        }
    },
    corePlugins: {
        preflight: true
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
    ]
}
