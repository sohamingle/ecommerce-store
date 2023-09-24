"use client"

import PropButton from "@/components/ui/prop-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Add, Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import Filter from "./filter";

interface Props{
    sizes:Size[]
    colors:Color[]
}

const MobileFilters:React.FC<Props> = ({sizes,colors}) => {

    const [open,setOpen] = useState(false)

    const onOpen = () => setOpen(true)

    const onClose = () => setOpen(false)
 
    return (
        <>
            <Button onClick={onOpen} color="inherit" className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Add className="w-4 h-4"/>
            </Button>

            <Dialog open={open} as="div" className={'relative z-40 lg:hidden'} onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className={'relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'}>
                        <div className="flex items-center justify-end px-4">
                            <PropButton onClick={onClose} icon={<Close className="h-4 w-4"/>} />
                        </div>
                        <div className="p-4">
                            <Filter valueKey={'sizeId'} name={'Sizes'} data={sizes}/>
                            <Filter valueKey={'colorId'} name={'Colors'} data={colors}/>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

export default MobileFilters;