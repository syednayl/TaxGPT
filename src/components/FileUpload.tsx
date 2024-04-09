'use client'
import { uploadToS3 } from '@/lib/s3'
import { Inbox } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-hot-toast'

type Props = {}

const FileUpload = (props: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    onDrop: async acceptedFiles => {
      console.log(acceptedFiles)
      const file = acceptedFiles[0]
      if (file.size > 10 * 1024 * 1024) {
        // bigger than 10mb!
        toast.error('File too large')
        return
      }
      try {
        const data = await uploadToS3(file)
        if (data) {
          toast.success('File uploaded successfully')
        }
        // console.log('DATA:', data)
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='rounded-xl bg-white p-2'>
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
        })}
      >
        <input {...getInputProps()} />
        <>
          <Inbox className='h-10 w-10 text-blue-500' />
          <p className='mt-2 text-sm text-slate-400'>Drop PDF here</p>
        </>
      </div>
    </div>
  )
}

export default FileUpload
