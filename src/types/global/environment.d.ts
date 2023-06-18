declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_OPENSEA_API_KEY: string;
    FIREBASE_ADMIN_SDK_PROJECT_ID: string;
    FIREBASE_ADMIN_SDK_CLIENT_EMAIL: string;
    FIREBASE_ADMIN_SDK_PRIVATE_KEY: string;
    FIREBASE_DATABASE_URL: string;
    MONGO_URL: string;
  }
}
