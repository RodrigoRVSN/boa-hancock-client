type AvatarLoadingProps = {
  numberOfLoaders?: number
}

export const AvatarLoading = ({ numberOfLoaders = 1 }: AvatarLoadingProps) => {
  return (
    <div className='flex flex-wrap justify-start items-start gap-md'>
      {new Array(numberOfLoaders).fill('').map(value => (
        <div
          key={value}
          className="rounded-md"
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray200 h-[128px] w-[128px]" />
          </div>
        </div>
      ))}
    </div>
  )
}
