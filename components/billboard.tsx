import { Billboard as BillboardType } from "@/types";
import ImageSlider from "./ui/image-slider";

interface BillboardProps {
  data: [];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {

  return (
    <div className="sm:p-5 lg:p-8 rounded-xl overflow-hidden">
      <ImageSlider sliderData={data} />
    </div>
  );
};

export default Billboard;
