"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/slices/modal";

// components
import RenderModalContent from "./render-modal";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
    const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);
    const window = useSelector((state: RootState) => state.modalSlice.window);

    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(closeModal())
    }

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <motion.div
                        className={`p-4 transition-opacity duration-300 fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur`}
                        onClick={closeWindow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <motion.div
                            className={`"w-full md:w-1/3 bg-white rounded-xl p-4 transition-all duration-300`}
                            onClick={(e) => e.stopPropagation()}

                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.01 }}
                        >
                            <RenderModalContent window={window} />
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal;

