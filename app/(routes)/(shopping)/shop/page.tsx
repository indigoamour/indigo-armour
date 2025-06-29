import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard(process.env.MAIN_BILLBOARD_ID || "");
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="px-8 w-full">
      <div className="space-y- pb-10 w-full">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 px-4 lg:px-8 justify-center items-center w-full">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
