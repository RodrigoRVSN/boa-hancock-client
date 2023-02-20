type AvatarLoadingProps = {
  numberOfLoaders?: number
}

export const AvatarLoading = ({ numberOfLoaders = 1 }: AvatarLoadingProps) => {
  return (
    <div className='flex flex-wrap justify-start items-start gap-md'>
      {new Array(numberOfLoaders).fill('').map((_, index) => (
        <div
          key={index}
          className="rounded-md"
          data-testid='avatar-loading'
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray200 h-[128px] w-[128px]" />
          </div>
        </div>
      ))}
    </div>
  )
}
