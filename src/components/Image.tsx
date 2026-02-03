export default function Image({ src,tailwind,width,height }: { src: string, tailwind?: string, width?: number, height?: number  }) {
    return (
        <img src={src}  alt="My Photo" className={tailwind}  width={width} height={height}/>
        
    )
}