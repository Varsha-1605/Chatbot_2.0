// // import { useState, useEffect } from 'react';

// // export const useSpeechRecognition = () => {
// //   const [isListening, setIsListening] = useState(false);
// //   const [transcript, setTranscript] = useState('');

// //   useEffect(() => {
// //     if (!('webkitSpeechRecognition' in window)) {
// //       console.log('Speech recognition not supported');
// //       return;
// //     }

// //     const recognition = new (window as any).webkitSpeechRecognition();
// //     recognition.continuous = true;
// //     recognition.interimResults = true;

// //     recognition.onresult = (event: any) => {
// //       const current = event.resultIndex;
// //       const transcript = event.results[current][0].transcript;
// //       setTranscript(transcript);
// //     };

// //     if (isListening) {
// //       recognition.start();
// //     } else {
// //       recognition.stop();
// //     }

// //     return () => {
// //       recognition.stop();
// //     };
// //   }, [isListening]);

// //   const toggleListening = () => setIsListening(!isListening);

// //   return { isListening, toggleListening, transcript };
// // };













// import { useState, useEffect, useCallback } from 'react';

// export const useSpeechRecognition = () => {
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const [error, setError] = useState<string | null>(null);

//   const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

//   const recognition = SpeechRecognition ? new SpeechRecognition() : null;

//   const startListening = useCallback(() => {
//     setTranscript('');
//     setError(null);
//     setIsListening(true);
//     recognition?.start();
//   }, [recognition]);

//   const stopListening = useCallback(() => {
//     setIsListening(false);
//     recognition?.stop();
//   }, [recognition]);

//   const toggleListening = useCallback(() => {
//     if (isListening) {
//       stopListening();
//     } else {
//       startListening();
//     }
//   }, [isListening, startListening, stopListening]);

//   useEffect(() => {
//     if (!recognition) {
//       setError('Speech recognition is not supported in this browser.');
//       return;
//     }

//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = 'en-US';

//     recognition.onresult = (event: any) => {
//       const current = event.resultIndex;
//       const transcript = event.results[current][0].transcript;
//       setTranscript(transcript);
//     };

//     recognition.onerror = (event: any) => {
//       setError(`Speech recognition error: ${event.error}`);
//       stopListening();
//     };

//     recognition.onend = () => {
//       if (isListening) {
//         recognition.start();
//       }
//     };

//     return () => {
//       recognition.stop();
//     };
//   }, [recognition, isListening, stopListening]);

//   return { isListening, transcript, error, toggleListening };
// };






import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const startListening = useCallback(() => {
    setTranscript('');
    setError(null);
    setIsListening(true);
    recognition?.start();
  }, [recognition]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    recognition?.stop();
  }, [recognition]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    if (!recognition) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = i18n.language;

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setTranscript(transcript);
    };

    recognition.onerror = (event: any) => {
      setError(`Speech recognition error: ${event.error}`);
      stopListening();
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    return () => {
      recognition.stop();
    };
  }, [recognition, isListening, stopListening, i18n.language]);

  return { isListening, transcript, error, toggleListening };
};