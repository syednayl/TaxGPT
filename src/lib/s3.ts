import AWS from 'aws-sdk'

export function uploadToS3(
  file: File
): Promise<{ file_key: string; file_name: string }> {
  console.log(file.type)
  return new Promise(async (resolve, reject) => {
    try {
      const s3 = new AWS.S3({
        region: 'eu-north-1',
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!
      })

      const file_key = Date.now().toString() + file.name.replace(' ', '-')
      console.log('Type FIle', file.type)

      s3.upload(
        {
          Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
          Key: file_key,
          Body: file,
          ContentType: file.type
        },
        (err, data) => {
          if (err) {
            console.log(err, 'ERROR uploadFile')
            reject(err)
          } else {
            return resolve({ file_key: file_key, file_name: file.name })
          }
        }
      )
    } catch (error) {
      console.log('Error Upload:  ', error)
      reject(error)
    }
  })
}

export function getS3Url(file_key: string) {
  const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.eu-north-1.amazonaws.com/${file_key}`
  console.log('URL:', url)
  return url
}
