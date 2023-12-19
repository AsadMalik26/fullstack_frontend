import React, { useMemo } from "react";
import { IoWallet } from "react-icons/io5";
import { getAllProducts, starProduct } from "../APIs/APIs";
import UserModal from "../components/UserModal";
function Page1() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
  });
  console.log(user);
  const [showModal, setShowModal] = React.useState(false);
  const onUserChange = React.useCallback(
    (name, email) => {
      setUser({ ...user, name, email });
    },
    [setUser, user]
  );
  const resetUser = React.useCallback(() => {
    setUser({ name: "", email: "" });
  }, [setUser]);
  const onSubmitUser = React.useCallback(() => {
    starProduct(user.productId, user)
      .then((res) => {
        console.log(res, "stared");
        alert("Product Stared");
      })
      .catch(() => {
        alert("Product Error");
      })
      .finally(() => {
        resetUser();
        setShowModal(false);
      });
  }, [setUser, user, resetUser, starProduct]);
  React.useEffect(() => {
    // Fetch all products on component mount
    setLoading(true);
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setTimeout(() => setLoading(false), 300));
  }, []);
  const productsDummy = React.useMemo(
    () => [
      {
        name: "Project Managment Tools",
        price: "200$",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue metus, posuere laoreet egestas nec",
      },
      {
        name: "Inventory Managment Product",
        price: "200$",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue metus, posuere laoreet egestas nec",
      },
      {
        name: "Hospital Managment Product",
        price: "200$",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue metus, posuere laoreet egestas nec",
      },
    ],
    []
  );
  const handleStar = useMemo((e) => {}, []);

  return (
    <>
      <UserModal
        key={"user"}
        setShowModal={setShowModal}
        showModal={showModal}
        user={user}
        onChange={onUserChange}
        onSubmitUser={onSubmitUser}
        resetUser={resetUser}
      />
      <div className="bg-img text-white text-center flex flex-col justify-center items-center gap-12">
        <div className="text-5xl uppercase font-sans font-extrabold flex flex-col gap-3">
          <p>Solution That Insipre,</p>
          <p>Products that deliver</p>
        </div>
        <p className="text-base w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue
          metus, posuere laoreet egestas nec, pharetra non magna. Etiam ut eros
          eu mauris semper porttitor. Suspendisse dictum dapibus leo a vehicula.
          Sed condimentum sem in urna
        </p>
      </div>
      <div className="mb-36">
        <div className="text-center flex flex-col gap-10 justify-center items-center mt-16 mb-10">
          <p className="uppercase text-2xl font-bold">View Our Products</p>
          <p className="text-base w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue
            metus, posuere laoreet egestas nec, pharetra non magna. Etiam ut
            eros eu mauris semper porttitor. Suspendisse dictum dapibus leo a
            vehicula. Sed condimentum sem in urna
          </p>
        </div>
        <div className="flex gap-5 justify-center text-center mb-10">
          {loading ? (
            <p className="font-mono">Fetching Products</p>
          ) : products.length === 0 ? (
            <p className="font-mono font-semibold">No Product Found</p>
          ) : (
            products.map((product, idx) => (
              <div
                key={idx}
                className="aspect-square w-80 h-64 bg-[#FAF5F2] active:border-2 active:border-dashed"
              >
                <div className="p-5 flex flex-col gap-4">
                  <p className="capitalize font-bold text-sm text-slate-700">
                    {product.name}
                  </p>
                  <p className="text-base ">{product.description}</p>
                </div>
                <hr />
                <div className="flex justify-between p-3 text-slate-700">
                  <span className="flex gap-2 items-center font-semibold">
                    <span>
                      <IoWallet />
                    </span>
                    <span>{product.price}</span>
                  </span>
                  <div
                    className="rating"
                    onClick={() => {
                      setUser({ ...user, productId: product.id });
                      setShowModal(true);
                    }}
                  >
                    <input
                      checked
                      type="radio"
                      name="rating-2"
                      className="rating-hidden"
                      readOnly
                    />
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star bg-slate-700"
                    />
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star bg-slate-700"
                    />
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star bg-slate-700"
                    />
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star bg-slate-700"
                    />
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star bg-slate-700"
                    />
                  </div>
                </div>
                <button className="btn btn-outline btn-sm my-2 capitalize hover:bg-[#942D3C] border border-[#942D3C]">
                  Show Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Page1;
