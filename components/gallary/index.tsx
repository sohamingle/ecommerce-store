"use client"

import { Tab } from '@headlessui/react'
import Image from 'next/image';
import { Image as ImageType } from "@/types";
import GallaryTab from './gallary-tab';

interface Props{
    images:ImageType[]
}

const Gallary:React.FC<Props> = ({images}) => {
    return (
        <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block'>
                <Tab.List className={"grid grid-cols-4 gap-6"}>
                    {images.map((image) =>(
                    <GallaryTab key={image.id} image={image}/>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className={"aspect-square w-full"}>
                        {images.map((image) =>(
                            <Tab.Panel key={image.id} >
                                <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ring-4 ring-offset-4 ring-black'>
                                    <Image
                                    fill
                                    alt='Image'
                                    src={image.url}
                                    className='object-cover object-center'
                                    />
                                </div>
                            </Tab.Panel>
                        ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default Gallary;