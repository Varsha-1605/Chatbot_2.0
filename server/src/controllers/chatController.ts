// import { Request, Response, NextFunction } from 'express';
// import { generateResponse } from '../services/openaiService';
// import Message from '../models/Message';

// export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { message } = req.body;
//     const response = await generateResponse(message);

//     const newMessage = new Message({
//       text: message,
//       sender: 'user',
//     });
//     await newMessage.save();

//     const botMessage = new Message({
//       text: response,
//       sender: 'bot',
//     });
//     await botMessage.save();

//     res.json({ response });
//   } catch (error) {
//     console.error('Error in sendMessage:', error);
//     next(error);
//   }
// };






















// import { Request, Response, NextFunction } from 'express';
// import { generateResponse } from '../services/openaiService';
// import Message from '../models/Message';

// export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { message } = req.body;
//     const response = await generateResponse(message);
//     const newMessage = new Message({
//       text: message,
//       sender: 'user',
//     });
//     await newMessage.save();
//     const botMessage = new Message({
//       text: response,
//       sender: 'bot',
//     });
//     await botMessage.save();
//     res.json({ response });
//   } catch (error) {
//     console.error('Error in sendMessage:', error);
//     next(error);
//   }
// };



import { Request, Response, NextFunction } from 'express';
import { generateResponse } from '../services/openaiService';
import Message from '../models/Message';

export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body;
    const response = await generateResponse(message);
    const newMessage = new Message({
      text: message,
      sender: 'user',
    });
    await newMessage.save();
    const botMessage = new Message({
      text: response,
      sender: 'bot',
    });
    await botMessage.save();
    res.json({ response });
  } catch (error) {
    console.error('Error in sendMessage:', error);
    next(error);
  }
};
