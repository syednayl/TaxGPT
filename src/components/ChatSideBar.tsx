'use client'
import { DrizzleChat } from '@/lib/db/schema'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { MessageCircle, PlusCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios'

type Props = {
  chats: DrizzleChat[]
  chatId: number
}

const ChatSideBar = ({ chats, chatId }: Props) => {
  const [loading, setLoading] = React.useState(false)

  return (
    <div className='soff h-screen w-full overflow-scroll bg-gray-900 p-4 text-yellow-500'>
      <Link href='/'>
        <Button
          className={cn('w-full border border-dashed border-yellow-400', {
            'bg-gray-900 text-white': 1,
            'hover:bg-yellow-400 hover:text-white': 1
          })}
        >
          <PlusCircle className='mr-2 h-4 w-4' />
          New Chat
        </Button>
      </Link>

      <div className='mt-4 flex h-screen flex-col gap-2  pb-20'>
        {chats.map(chat => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div
              className={cn('flex items-center rounded-lg p-3 text-slate-300', {
                'bg-yellow-500 text-white': chat.id === chatId,
                'hover:text-yellow-500': chat.id !== chatId
              })}
            >
              <MessageCircle className='mr-2' />
              <p className='text-s`m w-full  truncate text-ellipsis whitespace-nowrap'>
                {chat.pdfName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ChatSideBar
