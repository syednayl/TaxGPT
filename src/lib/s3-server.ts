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
      console.log('AHBSHAB', file_key)
      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
        Key: file_key
      }

      const obj = await s3.getObject(params).promise()

      // console.log('NAYL', obj.createReadStream())

      // Create directory
      const tmpDir = '/tmp' // Update this to the appropriate directory if needed

      // Check if the directory exists, if not, create it
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir)
      }

      // Generate a unique file name
      const file_name = path.join(tmpDir, `${Date.now().toString()}.pdf`)

      // Create a writable stream to write the object's body to the file
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

// downloadFromS3("uploads/1693568801787chongzhisheng_resume.pdf");
