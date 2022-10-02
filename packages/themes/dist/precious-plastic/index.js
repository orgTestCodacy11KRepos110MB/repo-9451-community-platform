"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const precious_plastic_logo_official_svg_1 = __importDefault(require("../assets/images/precious-plastic-logo-official.svg"));
const badge_member_svg_1 = __importDefault(require("../assets/images/badge-member.svg"));
const __1 = require("..");
const styles_1 = __importDefault(require("./styles"));
const Theme = {
    id: __1.THEME_LIST.PRECIOUS_PLASTIC,
    siteName: 'Precious Plastic',
    logo: precious_plastic_logo_official_svg_1.default,
    badge: badge_member_svg_1.default,
    avatar: '',
    howtoHeading: `Learn & share how to recycle, build and work with plastic`,
    styles: styles_1.default,
    academyResource: 'https://onearmy.github.io/academy/',
    externalLinks: [
        {
            url: 'https://bazar.preciousplastic.com/',
            label: 'Bazar',
        },
        {
            url: 'https://preciousplastic.com/',
            label: 'Global Site',
        },
    ],
};
exports.default = Theme;
