"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixingFashionTheme = exports.projectKampTheme = exports.preciousPlasticTheme = exports.GlobalStyle = exports.THEME_LIST = void 0;
var THEME_LIST;
(function (THEME_LIST) {
    THEME_LIST["PRECIOUS_PLASTIC"] = "precious-plastic";
    THEME_LIST["PROJECT_KAMP"] = "project-kamp";
    THEME_LIST["FIXING_FASHION"] = "fixing-fashion";
})(THEME_LIST = exports.THEME_LIST || (exports.THEME_LIST = {}));
var app_globalStyles_1 = require("./app.globalStyles");
Object.defineProperty(exports, "GlobalStyle", { enumerable: true, get: function () { return app_globalStyles_1.GlobalStyle; } });
const styles_1 = __importDefault(require("./precious-plastic/styles"));
exports.preciousPlasticTheme = styles_1.default;
const styles_2 = __importDefault(require("./project-kamp/styles"));
exports.projectKampTheme = styles_2.default;
const styles_3 = __importDefault(require("./fixing-fashion/styles"));
exports.fixingFashionTheme = styles_3.default;
