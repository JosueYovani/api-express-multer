import dotenv from "dotenv";

dotenv.config();

const API = {
  PORT: process.env.API_PORT,
};

const AWS_S3 = {
  REGION: process.env.AWS_REGION,
  ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
  SECRET_KET: process.env.AWS_SECRET_ACCESS_KEY,
  BUCKET_NAME: process.env.AWS_BUCKET_NAME,
};

export { API, AWS_S3 };
