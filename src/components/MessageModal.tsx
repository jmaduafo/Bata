import React from 'react'

function MessageModal({ message, isError }: { readonly message: string, readonly isError: boolean}) {
  return (
    <div className='w-full bg-primaryMuted border-[0.7px] border-primaryOutline py-2 px-4 rounded-xl'>
        <p className={`${isError ? "text-red-500" : "text-primary"}`}>{message}</p>
    </div>
  )
}

export default MessageModal