// import express, { Request, Response, NextFunction } from 'express';
// import http from 'http';
// import { Server as SocketServer } from 'socket.io';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import OpenAI from 'openai';
// import dotenv from 'dotenv';
// import chatRoutes from './routes/chatRoutes';
// import errorHandler from './utils/errorHandler';

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
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

// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose
//   .connect(MONGODB_URI!)
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

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port http://localhost:${PORT}`);
// });






import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import express from 'express';
import { Server as SocketServer } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes';
import errorHandler from './utils/errorHandler';

const morgan = (await import('morgan')).default;

dotenv.config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/chat', chatRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Hello from AI Chatbot!',
  });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).send({ error: 'Prompt is required' });
    }
    const response = await openai.chat.completions.create({
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
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).send({ error: (error as Error).message || 'An error occurred while processing your request' });
  }
});

app.use(errorHandler);

io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', async (msg: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: msg }],
        temperature: 0.7,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
      io.emit('chat message', response.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI API error:', error);
      io.emit('chat error', 'An error occurred while processing your message');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
