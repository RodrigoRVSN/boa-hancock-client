import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const Analytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_ID});`
        }}
      />
    </>
  )
}
