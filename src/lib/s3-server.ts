import AWS from 'aws-sdk'
import fs from 'fs'
import path from 'path'
export async function downloadFromS3(file_key: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const s3 = new AWS.S3({
        region: process.env.NEXT_PUBLIC_S3_BUCKET_REGION,
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!
      })

      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
        Key: file_key
      }

      const obj = await s3.getObject(params).promise()

      const tmpDir = '/tmp'
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir)
      }

      const file_name = path.join(tmpDir, `${Date.now().toString()}.pdf`)
      const fileStream = fs.createWriteStream(file_name)

      fs.writeFile(file_name, obj.Body as string, 'utf8', err => {
        if (err) {
          console.error('Error saving file:', err)
          reject(err)
        } else {
          console.log('File saved to:', file_name)
          resolve(file_name)
        }
      })
    } catch (error) {
      console.error('S3-Server: ', error)
      reject(error)
      return null
    }
  })
}
