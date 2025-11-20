const API_BASE = 'https://shoppy-globe-backend-0xlo.onrender.com/api'; //  backend URL
const token = localStorage.getItem("token");
export const addToCartAPI = async (userId, productId) => {
  const response = await fetch(`${API_BASE}/cart/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
     },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
  
};

export const decreaseFromCartAPI = async (userId, productId) => {
  const response = await fetch(`${API_BASE}/cart/decrease`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
};

export const removeFromCartAPI = async (userId, productId) => {
  const response = await fetch(`${API_BASE}/cart/remove/${productId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
};

// export const fetchCartAPI = async (userId) => {
//   const response = await fetch(`${API_BASE}/cart/${userId}`);
//   console.log("fetch cart api",response)
//   return await response.json();
// };
export const fetchCartAPI = async (userId) => {
  //const token = sessionStorage.getItem("token"); // or localStorage
  const response = await fetch(`${API_BASE}/cart/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  console.log("fetch cart api", response);
  return await response.json();
};
