import { LazyImageFull, ImageState } from 'react-lazy-images'

export const Img = ({ alt, svg, width, height, ...props }) => (
  <LazyImageFull {...props} >
    {({ src, imageState }) =>
      <img
        src={imageState === ImageState.LoadSuccess ? src : svg}
        style={{
          width: width ? width : `auto`,
          height: height ? height : `auto`,
          opacity: ImageState.LoadSuccess ? `1` : `0.5`
        }}
        alt={alt}
      />
    }
  </LazyImageFull>
)
