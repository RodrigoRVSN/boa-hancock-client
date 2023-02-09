export const Loading = () => {
  return (
    <span className="flex">
      <span
        className="animate-ping absolute inline-flex h-xxxlg w-xxxlg rounded-full opacity-75 bg-gradient-to-r from-primary to-secondary"
      />

      <span
        className="relative inline-flex rounded-full h-xxxlg w-xxxlg bg-gradient-to-r from-primary to-secondary"
      />
    </span>
  )
}
