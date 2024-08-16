// src/react-speech-recognition.d.ts
declare module 'react-speech-recognition' {
    interface SpeechRecognition {
      startListening: (options?: { continuous?: boolean }) => void;
      stopListening: () => void;
    }
  
    export function useSpeechRecognition(): {
      transcript: string;
      listening: boolean;
      resetTranscript: () => void;
      browserSupportsSpeechRecognition: () => boolean;
      startListening: (options?: { continuous?: boolean }) => void;
      stopListening: () => void;
    };
  
    export default useSpeechRecognition;
  }
  