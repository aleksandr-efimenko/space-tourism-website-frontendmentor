import closeIcon from '~/assets/shared/icon-close.svg'
import Image from 'next/image'
import { websiteStructure } from '@/data/websiteStructure'
import Link from 'next/link'
import { convertToDoubleDigit } from '@/utils/CalculationFunctions'
import { AnimatePresence, motion } from 'framer-motion'

export function MainMenuMobile({
  currentPathname,
  closeMobileMenu,
}: {
  currentPathname: string
  closeMobileMenu: () => void
}) {
  return (
    <div className='absolute inset-0 overflow-hidden z-10'>
      <motion.div
        className='md:hidden flex justify-end w-full'
        // open and close animation
        key={currentPathname}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <div className='w-2/6 h-screen' onClick={closeMobileMenu}></div>
        <div className='w-4/6 h-screen menu-bg-filter'>
          <button className='absolute top-9 right-6' onClick={closeMobileMenu}>
            <Image src={closeIcon} alt='close icon' width={20} height={20} />
          </button>
          <ul className='mt-28 w-full flex flex-col gap-8'>
            {websiteStructure.map((item, index) => (
              <li key={item.name}>
                <Link href={item.path} key={item.name} onClick={closeMobileMenu} className='flex ml-8 gap-3 nav-text'>
                  <span className='font-bold'>{convertToDoubleDigit(index)}</span>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}