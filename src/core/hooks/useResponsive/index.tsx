export const useResponsive = () => {
  const isDesktop = window.innerWidth > 1000

  return { isDesktop }
}
