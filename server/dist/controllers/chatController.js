"use strict";
// import { Request, Response, NextFunction } from 'express';
// import { generateResponse } from '../services/openaiService';
// import Message from '../models/Message';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const openaiService_1 = require("../services/openaiService");
const Message_1 = __importDefault(require("../models/Message"));
const sendMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message } = req.body;
        const response = yield (0, openaiService_1.generateResponse)(message);
        const newMessage = new Message_1.default({
            text: message,
            sender: 'user',
        });
        yield newMessage.save();
        const botMessage = new Message_1.default({
            text: response,
            sender: 'bot',
        });
        yield botMessage.save();
        res.json({ response });
    }
    catch (error) {
        console.error('Error in sendMessage:', error);
        next(error);
    }
});
exports.sendMessage = sendMessage;
