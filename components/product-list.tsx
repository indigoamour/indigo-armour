import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4 w-full ">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {items?.length === 0 && <NoResults />}
      <div className="flex items-center w-full justify-center md:justify-center flex-wrap gap-5 flex-shrink-0">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
