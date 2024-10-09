import React from 'react'

function MessageModal({ message, isError }: { readonly message: string, readonly isError: boolean}) {
  return (
    <div className='w-full bg-primaryMuted border-[0.7px] border-primaryOutline py-3 px-5 rounded-xl'>
        <p className={`text-[14px]`}>{isError ? 'Error:' : null} {message}</p>
    </div>
  )
}

export default MessageModal