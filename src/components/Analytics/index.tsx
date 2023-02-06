import Script from 'next/script'

export const Analytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FFJ2V2BL3R"
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FFJ2V2BL3R');`
        }}
      />
    </>
  )
}
