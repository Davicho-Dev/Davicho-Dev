import { FC } from 'react'

import Image from 'next/image'

import { LogoProps } from './Logo.interface'

export const Logo: FC<LogoProps> = ({ alt, src }) => {
	return <Image src={src} alt={alt} width={200} height={100} />
}
