import Image from 'next/image';
import { logoImg } from '@/utils/static-imports';

const LogoImg = ({ className, width = 50, height = 50 }: { className?: string, width?: number, height?: number }) => {
    return (
        <div className={`${className} w-${width} h-${height} aspect-square`}>
            <Image
                src={logoImg}
                alt="logo"
                width={width}
                height={height}
                priority
                className='aspect-square'
            />
        </div>
    )
}

export default LogoImg

