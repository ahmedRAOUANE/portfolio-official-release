"use client";

import React from 'react'
import { useDispatch } from 'react-redux';
import Button from '../core-components/buttons';
import { closeModal } from '@/store/slices/modal';

const CloseModalBtn = () => {
    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(closeModal())
        // add some other logic
    }

    return (
        <Button className='px-4 py-2 text-white bg-slate-900 rounded-lg' onClick={closeWindow}>
            close
        </Button>
    )
}

export default CloseModalBtn