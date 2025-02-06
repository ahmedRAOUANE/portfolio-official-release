import { MdError } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import CloseModalBtn from '../close-modal-btn';
import Typography from '../../core-components/typography';

/**
 * A modal component that displays a progress message, with a "success" 
 * visual indicator if the operation was successful and an "error" visual
 * indicator otherwise.  The component also includes a "close" button to
 * dismiss the modal.
 * 
 * @param {{success: boolean, message: string}} props - The properties for the
 * component.  The "success" property should be true if the operation was
 * successful and false otherwise.  The "message" property should contain the
 * text of the progress message to display.
 * 
 * @returns {JSX.Element} The ProgressMessage component.
 */

const ProgressMessage = ({ success, message }: { success?: boolean, message: string }) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <Typography variant='h2' className='text-2xl font-bold flex items-center gap-3'>
                    {success ? (
                        <span className=''>
                            <FaCheckCircle className='fill-lime-600' />
                        </span>
                    ) : (
                        <span className=''>
                            <MdError className='fill-red-800' />
                        </span>
                    )}
                    <span>
                        {success ? "Success" : "Error"}
                    </span>
                </Typography>
                <p>{message}</p>
            </div>

            <div className='w-full flex gap-3 items-center justify-end'>
                <CloseModalBtn />
            </div>
        </div>
    )
}

export default ProgressMessage