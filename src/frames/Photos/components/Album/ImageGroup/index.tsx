import ImageCell from '../../ImageCell'

interface ImageGroupProps {
  title: string
  dateRange: string
  images: string[]
}
const ImageGroup = ({ title, dateRange, images }: ImageGroupProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      <h4>{dateRange}</h4>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {images.map((image, index) => (
          <ImageCell key={index} src={image} />
        ))}
      </div>
    </div>
  )
}
export default ImageGroup
