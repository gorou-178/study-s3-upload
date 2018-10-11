
AWS.config.update({
    accessKeyId: 'accessKey',
    secretAccessKey: 'secretKey',
    endpoint: 'https://s3-ap-northeast-1.amazonaws.com',
    s3ForcePathStyle: true,
    region: 'ap-northeast-1'
});

const uploadS3 = function(){
    let s3 = new AWS.S3();
    let bucket = 'bucketName';
    let params1 = {
        Bucket: bucket,
        Key: 'test1.txt',
        Body: 'Hello!',
        ContentType: 'text/plain'
    };
    
    let params2 = {
        Bucket: bucket,
        Key: 'test2.txt',
        Body: 'World!',
        ContentType: 'text/plain'
    };
    
    s3.upload(params1, function (err, result) {
        console.log(err, result);
    });
    s3.upload(params2, function (err, result) {
        console.log(err, result);
    });
}
