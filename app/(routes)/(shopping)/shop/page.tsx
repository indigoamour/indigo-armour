import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Eco-Friendly Hand-Dyed Fashion",
  description:
    "Browse our collection of hand-dyed, sustainable clothing. Unique pieces including dresses, tops, and accessories made with natural dyes.",
};

export const revalidate = 0;

const HomePage = async () => {
  const billboard: any = await getBillboard();
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="px-8 w-full">
      <div className="space-y- pb-10 w-full">
        <h1 className="sr-only">Shop Eco-Friendly Hand-Dyed Fashion</h1>
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 px-4 lg:px-8 justify-center items-center w-full">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
