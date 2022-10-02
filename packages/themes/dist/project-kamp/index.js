"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_kamp_header_png_1 = __importDefault(require("src/assets/images/themes/project-kamp/project-kamp-header.png"));
const badge_svg_1 = __importDefault(require("src/assets/images/themes/project-kamp/badge.svg"));
const avatar_svg_1 = __importDefault(require("src/assets/images/themes/project-kamp/avatar.svg"));
const styles_1 = __importDefault(require("./styles"));
const __1 = require("..");
const Theme = {
    id: __1.THEME_LIST.PROJECT_KAMP,
    siteName: 'Project Kamp',
    logo: project_kamp_header_png_1.default,
    badge: badge_svg_1.default,
    avatar: avatar_svg_1.default,
    howtoHeading: `Learn & share how to recycle, build and work`,
    styles: styles_1.default,
    academyResource: 'https://project-kamp-academy.netlify.app/',
    externalLinks: [
        {
            url: 'https://projectkamp.com/support.html',
            label: 'Support Us',
        },
        {
            url: 'https://projectkamp.com/',
            label: 'Project Homepage',
        },
    ],
};
exports.default = Theme;
