import {ImageShow} from "./ImageShow";

export default function ImageList({images}) {
        const renderedImages = images.map((img, index) => (
          <ImageShow key={index} image={img}/>
        ));
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {renderedImages}
      </div>
    </div>
  )
}
