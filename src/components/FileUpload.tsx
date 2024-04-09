'use client'
import { Inbox } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

type Props = {}

const FileUpload = (props: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles)
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
