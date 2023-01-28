import { useRouter } from 'next/router'
import { footerRoutes } from './Footer.data'

export const Footer = () => {
  const { push } = useRouter()

  return (
    <footer className="bg-black100 w-full flex justify-around py-md">
      {footerRoutes.map(({ Icon, path, key }) => (
        <Icon
          key={key}
          className='text-primary w-xlg h-xlg cursor-pointer'
          onClick={() => push(path)}
        />
      ))}
    </footer>
  )
}
