import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem, {
  MostSoldProductItemSkeleton,
} from "./most-sold-product-item";

const MostSoldProductsCard = async () => {
  const mostSoldProducts = await getMostSoldProducts();
  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-hidden rounded-xl bg-white">
      <p className="p-6 text-lg font-semibold text-slate-900">
        Produtos mais vendidos
      </p>
      <div className="space-y-7 overflow-y-auto px-6 pb-6">
        {mostSoldProducts.map((product) => (
          <MostSoldProductItem key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export const MostSoldProductsCardSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-hidden rounded-xl bg-white">
      <p className="p-6 text-lg font-semibold text-slate-900">
        Produtos mais vendidos
      </p>
      <div className="space-y-7 overflow-y-auto px-6 pb-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <MostSoldProductItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default MostSoldProductsCard;
