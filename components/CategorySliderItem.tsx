import Image from "next/image";
import Overlay from "./Overlay";

interface CategorySliderItemProps {
  image: string;
  alt: string;
  name: string;
}

const CategorySliderItem: React.FC<CategorySliderItemProps> = ({
  image,
  alt,
  name,
}) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className="text-5xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default CategorySliderItem;
