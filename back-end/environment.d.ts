export {};

declare global {
  namespace NodeJS {
    interface Processenv {
      PORT: number;
      CONNECTION_STRING: string;
      APP_HOST_PASSWORD: string;
      APP_HOST_EMAIL: string;
    }
  }
}
