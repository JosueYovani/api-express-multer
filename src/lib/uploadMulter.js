import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

import { AWS_S3 } from "../../config/index.js";

const s3 = new S3Client({
  region: AWS_S3.REGION,
  AccessKeyId: AWS_S3.ACCESS_KEY,
  SecretAccessKey: AWS_S3.SECRET_KET,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_S3.BUCKET_NAME,
    key: (req, file, cb) => {
      cb(null, `uploads/${file.originalname}`);
    },
    shouldTransform: (req, file, cb) => {
      cb(null, /^image/i.test(file.mimetype));
    },
    transforms: [
      {
        id: "original",
        key: (req, file, cb) => {
          cb(null, file.originalname);
        },
        transform: (req, file, cb) => {
          // track progress of upload
          const progress = { loaded: 0, total: 0 };
          const params = { ...s3Params, Body: file.stream };
          const upload = s3.upload(params);

          upload.on("httpUploadProgress", (evt) => {
            progress.loaded = evt.loaded;
            progress.total = evt.total;
          });

          cb(null, upload, file.mimetype);
        },
      },
    ],
  }),
});

export default upload;
