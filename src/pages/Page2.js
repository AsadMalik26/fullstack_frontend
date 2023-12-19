import React from "react";
import ProductTable from "../components/ProductTable";
import { getStarredProducts } from "../APIs/APIs";

function Page2() {
  const [starredProducts, setStarredProducts] = React.useState([]);

  React.useEffect(() => {
    // Fetch starred products on component mount
    getStarredProducts()
      .then((data) => setStarredProducts(data))
      .catch((error) => console.error('Error fetching starred products:', error));
  }, []);
  React.useEffect(() => {}, []);
  return (
    <>
      <div className="bg-img-2 text-white text-center flex flex-col justify-center items-center gap-12">
        <div className="text-5xl uppercase font-sans font-extrabold flex flex-col gap-3">
          <p>Listing</p>
        </div>
        <p className="text-base w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue
          metus, posuere laoreet egestas nec, pharetra non magna. Etiam ut eros
          eu mauris semper porttitor. Suspendisse dictum dapibus leo a vehicula.
          Sed condimentum sem in urna
        </p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <div className="w-4/5 z-10 top-5 -translate-y-16 bg-white p-7">
          <p className="text-2xl font-sans font-semibold mb-5">
            List of Products
          </p>
          <ProductTable users={starredProducts} />
        </div>
      </div>
    </>
  );
}

export default Page2;
