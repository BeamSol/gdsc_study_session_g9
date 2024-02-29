// import React from 'react';

// const Cart = ({ cart }) => {
//   return (
//     <div className="bg-gray-200 p-4 rounded">
//       <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cart.map(item => (
//             <li key={item.id} className="flex justify-between items-center py-2 border-b">
//               <div className="flex items-center space-x-2">
//                 <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded-md" />
//                 <div>
//                   <p className="text-sm font-semibold">{item.title}</p>
//                   <p className="text-sm text-gray-500">Color: {item.color}</p>
//                 </div>
//               </div>
//               <p className="text-sm">${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
