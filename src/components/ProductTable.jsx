import React from 'react'

function ProductTable({ users = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <tr key={idx}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.product?.name}</td>

              <td>
                <div
                  className="rating"
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
              </td>
              <td>
                <button className='btn btn-sm text-white bg-red-800'>View Details</button>
              </td>
            </tr>

          ))}
          {users.length === 0 && <p className="font-mono font-semibold">No Product Found</p>}
        </tbody>
        <tfoot>
          <div className="join">
            <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="1" checked />
            <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="2" />
            <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="3" />
            <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="4" />
          </div>
        </tfoot>
      </table>
    </div>
  )
}

export default ProductTable