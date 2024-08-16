"use strict";
// import express, { Request, Response, NextFunction } from 'express';
// import http from 'http';
// import { Server as SocketServer } from 'socket.io';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import OpenAI from 'openai';
// import chatRoutes from './routes/chatRoutes';
// import errorHandler from './utils/errorHandler';
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
// const openai = new OpenAI({
//   apiKey: 'your-api-key-here', // Replace with your OpenAI API key
// });
// const app = express();
// const server = http.createServer(app);
// const io = new SocketServer(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });
// app.use(cors());
// app.use(helmet());
// app.use(morgan('combined'));
// app.use(express.json());
// const MONGODB_URI = 'your-mongodb-uri-here'; // Replace with your MongoDB URI
// mongoose
//   .connect(MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));
// app.use('/chat', chatRoutes);
// app.get('/', async (req: Request, res: Response) => {
//   res.status(200).send({
//     message: 'Hello from AI Chatbot!',
//   });
// });
// app.post('/api/chat', async (req: Request, res: Response) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).send({ error: 'Prompt is required' });
//     }
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//       max_tokens: 3000,
//       top_p: 1,
//       frequency_penalty: 0.5,
//       presence_penalty: 0,
//     });
//     res.status(200).send({
//       bot: response.choices[0].message.content
//     });
//   } catch (error) {
//     console.error('OpenAI API error:', error);
//     res.status(500).send({ error: (error as Error).message || 'An error occurred while processing your request' });
//   }
// });
// app.use(errorHandler);
// io.on('connection', (socket) => {
//   console.log('A user connected');
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
//   socket.on('chat message', async (msg: string) => {
//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: msg }],
//         temperature: 0.7,
//         max_tokens: 3000,
//         top_p: 1,
//         frequency_penalty: 0.5,
//         presence_penalty: 0,
//       });
//       io.emit('chat message', response.choices[0].message.content);
//     } catch (error) {
//       console.error('OpenAI API error:', error);
//       io.emit('chat error', 'An error occurred while processing your message');
//     }
//   });
// });
// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port http://localhost:${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
const MONGODB_URI = process.env.MONGODB_URI;
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
app.use('/chat', chatRoutes_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({
        message: 'Hello from AI Chatbot!',
    });
}));
app.post('/api/chat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).send({ error: 'Prompt is required' });
        }
        const response = yield openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });
        res.status(200).send({
            bot: response.choices[0].message.content
        });
    }
    catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).send({ error: error.message || 'An error occurred while processing your request' });
    }
}));
app.use(errorHandler_1.default);
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('chat message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: msg }],
                temperature: 0.7,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            });
            io.emit('chat message', response.choices[0].message.content);
        }
        catch (error) {
            console.error('OpenAI API error:', error);
            io.emit('chat error', 'An error occurred while processing your message');
        }
    }));
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
