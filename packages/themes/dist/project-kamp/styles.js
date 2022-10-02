"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zIndex = exports.colors = void 0;
const badge_svg_1 = __importDefault(require("src/assets/images/themes/project-kamp/badge.svg"));
const avatar_svg_1 = __importDefault(require("src/assets/images/themes/project-kamp/avatar.svg"));
const project_kamp_header_png_1 = __importDefault(require("src/assets/images/themes/project-kamp/project-kamp-header.png"));
// use enum to specify list of possible colors for typing
exports.colors = {
    white: 'white',
    offwhite: '#ececec',
    black: '#1b1b1b',
    primary: 'green',
    softyellow: '#f5ede2',
    yellow: { base: '#8ab57f', hover: 'hsl(108, 25%, 68%)' },
    blue: '#83ceeb',
    red: '#eb1b1f',
    red2: '#f58d8e',
    softblue: '#e2edf7',
    bluetag: '#5683b0',
    grey: '#61646b',
    green: '#00c3a9',
    error: 'red',
    background: '#f4f6f7',
    silver: '#c0c0c0',
    softgrey: '#c2d4e4',
    lightgrey: '#ababac',
    darkGrey: '#686868',
};
exports.zIndex = {
    behind: -1,
    level: 0,
    default: 1,
    slickArrows: 100,
    modalProfile: 900,
    logoContainer: 999,
    mapFlexBar: 2000,
    header: 3000,
};
const fonts = {
    body: `'Inter', Arial, sans-serif`,
};
const space = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140,
];
const radii = space;
const fontSizes = [10, 12, 14, 18, 22, 30, 38, 42, 46, 50, 58, 66, 74];
const breakpoints = ['40em', '52em', '70em'];
// standard widths: 512px, 768px, 1024px
const maxContainerWidth = 1280;
const regular = 400;
const bold = 600;
// cc - assume standard image widths are 4:3, however not clearly defined
const alerts = {
    success: {
        borderRadius: 1,
        paddingX: 3,
        paddingY: 3,
        backgroundColor: exports.colors.green,
        textAlign: 'center',
        fontWeight: 'normal',
    },
    failure: {
        borderRadius: 1,
        paddingX: 3,
        paddingY: 3,
        backgroundColor: exports.colors.red2,
        textAlign: 'center',
        fontWeight: 'normal',
    },
};
const buttons = {
    primary: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: '2px solid ' + exports.colors.black,
        color: exports.colors.black,
        bg: exports.colors.yellow.base,
        transition: '.2s ease-in-out',
        '&:hover': {
            bg: exports.colors.yellow.hover,
            cursor: 'pointer',
        },
        '&[disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
        '&[disabled]:hover': {
            bg: exports.colors.yellow.base,
        },
        borderRadius: radii[1] + 'px',
    },
    secondary: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: '2px solid ' + exports.colors.black,
        color: exports.colors.black,
        display: 'flex',
        bg: exports.colors.softblue,
        transition: '.2s ease-in-out',
        '&:hover': {
            bg: exports.colors.white,
            cursor: 'pointer',
        },
        '&[disabled]': {
            opacity: 0.5,
        },
        '&[disabled]:hover': {
            bg: exports.colors.softblue,
        },
        borderRadius: radii[1] + 'px',
    },
    tertiary: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: '2px solid ' + exports.colors.black,
        color: exports.colors.black,
        display: 'flex',
        bg: exports.colors.white,
        transition: '.2s ease-in-out',
        '&:hover': {
            bg: exports.colors.red,
            cursor: 'pointer',
        },
        '&[disabled]': {
            opacity: 0.5,
        },
        '&[disabled]:hover': {
            bg: exports.colors.white,
        },
        borderRadius: radii[1] + 'px',
    },
    outline: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: '2px solid ' + exports.colors.black,
        color: exports.colors.black,
        backgroundColor: exports.colors.white,
        transition: '.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
        '&:hover': {
            backgroundColor: exports.colors.softblue,
            cursor: 'pointer',
        },
        borderRadius: radii[1] + 'px',
    },
    imageInput: {
        border: '2px dashed #e0e0e0',
        color: '#e0e0e0',
        backgroundColor: 'transparent',
    },
    colorful: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: '2px solid ' + exports.colors.black,
        color: exports.colors.black,
        display: 'flex',
        bg: exports.colors.white,
        transition: '.2s ease-in-out',
        '&:hover': {
            bg: exports.colors.yellow.base,
            cursor: 'pointer',
        },
        '&[disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
        '&[disabled]:hover': {
            bg: exports.colors.yellow.base,
        },
        borderRadius: radii[1] + 'px',
    },
    subtle: {
        fontFamily: '"Varela Round", Arial, sans-serif',
        border: 'none',
        color: exports.colors.black,
        display: 'flex',
        bg: exports.colors.softblue,
        transition: '.2s ease-in-out',
        '&:hover': {
            bg: exports.colors.white,
            cursor: 'pointer',
        },
        '&[disabled]': {
            opacity: 0.5,
        },
        '&[disabled]:hover': {
            bg: exports.colors.softblue,
        },
        borderRadius: radii[1] + 'px',
    },
};
const typography = {
    auxiliary: {
        fontFamily: '"Inter", Helvetica Neue, Arial, sans-serif;',
        fontSize: '12px',
        color: exports.colors.grey,
    },
    paragraph: {
        fontFamily: '"Inter", Helvetica Neue, Arial, sans-serif;',
        fontSize: '16px',
        color: exports.colors.grey,
    },
};
const StyledComponentTheme = {
    name: 'Project Kamp',
    profileGuidelinesURL: 'https://drive.google.com/file/d/1fXTtBbzgCO0EL6G9__aixwqc-Euqgqnd/view',
    communityProgramURL: 'https://community.preciousplastic.com/academy/guides/community-program',
    logo: project_kamp_header_png_1.default,
    alerts,
    badges: {
        member: {
            lowDetail: avatar_svg_1.default,
            normal: badge_svg_1.default,
        },
    },
    cards: {
        primary: {
            background: 'white',
            border: `2px solid ${exports.colors.black}`,
            borderRadius: 1,
            overflow: 'hidden',
        },
    },
    colors: exports.colors,
    buttons,
    breakpoints,
    space,
    radii,
    fontSizes,
    fonts,
    forms: {
        input: {
            background: exports.colors.background,
            borderRadius: 1,
            border: '1px solid transparent',
            fontFamily: `'Inter', Arial, sans-serif`,
            fontSize: 1,
            '&:focus': {
                borderColor: exports.colors.blue,
                outline: 'none',
                boxShadow: 'none',
            },
        },
        inputOutline: {
            background: 'white',
            border: `2px solid ${exports.colors.black}`,
            borderRadius: 1,
            '&:focus': {
                borderColor: exports.colors.blue,
                outline: 'none',
                boxShadow: 'none',
            },
        },
        error: {
            background: exports.colors.background,
            borderRadius: 1,
            border: `1px solid ${exports.colors.error}`,
            fontFamily: `'Inter', Arial, sans-serif`,
            fontSize: 1,
            '&:focus': {
                borderColor: exports.colors.blue,
                outline: 'none',
                boxShadow: 'none',
            },
        },
        textarea: {
            background: exports.colors.background,
            border: `1px solid transparent`,
            borderRadius: 1,
            fontFamily: `'Inter', Arial, sans-serif`,
            fontSize: 1,
            padding: 2,
            '&:focus': {
                borderColor: exports.colors.blue,
                outline: 'none',
                boxShadow: 'none',
            },
        },
        textareaError: {
            background: exports.colors.background,
            border: `1px solid ${exports.colors.error}`,
            borderRadius: 1,
            fontFamily: `'Inter', Arial, sans-serif`,
            fontSize: 1,
            padding: 2,
            '&:focus': {
                borderColor: exports.colors.blue,
                outline: 'none',
                boxShadow: 'none',
            },
        },
    },
    maxContainerWidth,
    regular,
    bold,
    text: {
        heading: {
            fontFamily: '"Varela Round", Arial, sans-serif',
            fontSize: fontSizes[5],
            fontWeight: 'normal',
        },
        small: {
            fontFamily: '"Varela Round", Arial, sans-serif',
            fontSize: fontSizes[4],
            fontWeight: 'normal',
        },
    },
    typography,
    zIndex: exports.zIndex,
};
exports.default = StyledComponentTheme;
