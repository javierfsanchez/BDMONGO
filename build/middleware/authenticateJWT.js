"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "MiClave"; // Debe ser la misma clave usada para generar el token
const authenticateJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).send("Acceso denegado");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).send("Token inválido");
    }
};
exports.default = authenticateJWT;