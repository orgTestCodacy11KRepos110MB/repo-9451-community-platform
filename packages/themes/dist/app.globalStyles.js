"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const react_1 = require("@emotion/react");
const styled_theme_1 = __importDefault(require("./styled.theme"));
const fonts_1 = require("./fonts");
// declare global styling overrides (fonts etc.)
exports.GlobalStyle = (0, react_1.css) `
  ${fonts_1.GlobalFonts}
  body {
    font-family: 'Varela Round', Arial, sans-serif;
    background-color: ${styled_theme_1.default.colors.background};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .slick-prev,
  .slick-next {
    position: absolute !important;
    top: 50%;
    z-index: ${styled_theme_1.default.zIndex.slickArrows};
    transform: translateY(-50%);
    cursor: pointer;
  }

  .slick-next {
    left: auto;
    right: 0;
  }

  .slick-prev {
    left: 0;
    right: auto;
  }

  .slick-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  /***** Fix for Algolia search Icon *******/
  .ap-icon-pin {
    display: none;
  }

  /* Screen-reader text only - Taken from bootstrap 4 */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
