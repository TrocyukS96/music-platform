'use client'
import { Heading } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC } from 'react';

interface ITrackProps{
  params:any
}

const Track:FC<ITrackProps> = (props) => {
  const params = useParams()
  console.log(params,'--params')
  return (
    <div>
      <Link href={'/tracks'} className='text-blue-600/75 text-lg'>К списку треков</Link>
      <Heading className=''>Info about track with id={params.id}</Heading>
    </div>
  )
}

export default Track;