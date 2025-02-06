import Image from 'next/image';
import { logoImg } from '@/utils/static-imports';

const LogoImg = ({ className, width, height }: { className?: string, width?: number, height?: number }) => {
    return (
        <div className={`${className} w-${width || 50} h-${height || 50} aspect-square`}>
            <Image src={logoImg} alt="logo" width={width || 50} height={height || 50} priority className='aspect-square' />
        </div>
    )
}

export default LogoImg