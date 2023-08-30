import { CorsOptions } from 'cors';

const allowedOrigins: string[] = [
  'http://localhost:4200',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export default corsOptions;