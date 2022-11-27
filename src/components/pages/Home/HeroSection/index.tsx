import Image from 'next/image'
import { ButtonLogin } from '@components/pages/Home/HeroSection/ButtonLogin'

export const HeroSection = () => {
  return (
    <div className='bg-black200 w-screen h-screen'>
      <main className='p-xxlg'>
        <Image src='/assets/logo.png' alt='Logo Codojo' width={140} height={60}/>

        <section className='flex items-center justify-between'>
          <div>
            <h1 className='text-text font-bold font-space_grotesk text-h1'>A plataforma para encontrar outros
              programadores</h1>
            <p className='text-gray100 text-p1 mt-lg mb-xxlg'>Ache programadores para fazer networking, pair programming
              e seções de dojo.</p>

            <ButtonLogin/>
          </div>

          <Image
            src='/assets/pair-programming.svg'
            alt='Imagem de pessoas programando juntas'
            width={400}
            height={400}
          />
        </section>

      </main>
    </div>
  )
}
