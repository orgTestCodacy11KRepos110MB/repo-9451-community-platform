"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fixing_fashion_header_png_1 = __importDefault(require("src/assets/images/themes/fixing-fashion/fixing-fashion-header.png"));
const badge_svg_1 = __importDefault(require("src/assets/images/themes/fixing-fashion/badge.svg"));
const avatar_svg_1 = __importDefault(require("src/assets/images/themes/fixing-fashion/avatar.svg"));
const styles_1 = __importDefault(require("./styles"));
const __1 = require("..");
const Theme = {
    id: __1.THEME_LIST.FIXING_FASHION,
    siteName: 'Fixing Fashion',
    logo: fixing_fashion_header_png_1.default,
    badge: badge_svg_1.default,
    avatar: avatar_svg_1.default,
    howtoHeading: `Learn & share how to recycle, build and work`,
    styles: styles_1.default,
    academyResource: 'https://fixing-fashion-academy.netlify.app/',
    externalLinks: [
        {
            url: 'https://fixing.fashion/',
            label: 'Project Homepage',
        },
    ],
};
exports.default = Theme;
