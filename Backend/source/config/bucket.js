const aws = require('aws-sdk');
require('dotenv').config();

const{
    BUCKET_NAME,
    BUCKET_USER_ID,
    BUCKET_USER_SECRET,
    BUCKET_REGION
} = process.env;

const uploadFile = async (req, res) => {
    const {path, image } = req.body;

    aws.config.update({
        accessKeyId: BUCKET_USER_ID,
        secretAccessKey: BUCKET_USER_SECRET,
        region: BUCKET_REGION   

    });

    const s3 = new aws.S3();
};
