import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-4sati5t-shard-00-00.azrfgkq.mongodb.net:27017,ac-4sati5t-shard-00-01.azrfgkq.mongodb.net:27017,ac-4sati5t-shard-00-02.azrfgkq.mongodb.net:27017/?ssl=true&replicaSet=atlas-131isu-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg","image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) 
            return `${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        };
    }
});

export default multer({ storage });
