// src/declarations.d.ts
declare module 'react-speech-recognition' {
    export const useSpeechRecognition: () => {
      transcript: string;
      listening: boolean;
      resetTranscript: () => void;
      browserSupportsSpeechRecognition: () => boolean;
      startListening: (options?: { continuous?: boolean }) => void;
      stopListening: () => void;
    };
  }
  