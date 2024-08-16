declare module 'socket.io' {
    import { Server } from 'http';
    export default interface SocketIO {
      Server: new (httpServer: Server, options?: any) => any;
    }
  }