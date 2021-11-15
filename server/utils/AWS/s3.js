import AWS from "aws-sdk";
/*aws-config*/
const s3Bucket=new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    accessSecretId:process.env.AWS_SECRET_ACCESS_KEY,
    AWS_SDK_LOAD_CONFIG:"1",
     region:"us-east-2",
 
 });
 //upload to s3 
export const s3upload=(options)=>{
    return new Promise((resolve,reject)=>{
        s3Bucket.upload(options,(error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    })
};