import FilterBox from "../../components/Module/FilterBox";
import ShopProductList from "../../components/template/ShopProductList";

function page() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container flex flex-col lg:flex-row mx-auto pt-32 p-4 gap-6">
        <FilterBox />
        <ShopProductList />
      </div>
    </div>
  );
}

export default page;
