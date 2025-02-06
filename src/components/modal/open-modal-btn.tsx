"use client";

import React from "react";
import { useDispatch } from "react-redux";
import Button from "../core-components/buttons";
import { openModal } from "@/store/slices/modal";


const OpenModalBtn = ({ window, children }: { window: string, children: React.ReactNode }) => {
    const dispatch = useDispatch();

    const openWindow = () => {
        dispatch(openModal(window))
        // add some other logic
    }

    return (
        <Button className='px-4 py-2 text-white bg-slate-900 rounded-lg' onClick={openWindow}>
            {children}
        </Button>
    )
}

export default OpenModalBtn