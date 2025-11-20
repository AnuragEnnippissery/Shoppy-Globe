const API_BASE = 'https://shoppy-globe-backend-0xlo.onrender.com/api';

export const addToCartAPI = async (userId, productId) => {
  const token = localStorage.getItem("token");   // <-- FIXED: moved inside
  const response = await fetch(`${API_BASE}/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
};

export const decreaseFromCartAPI = async (userId, productId) => {
  const token = localStorage.getItem("token");   // <-- FIXED
  const response = await fetch(`${API_BASE}/cart/decrease`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
};

export const removeFromCartAPI = async (userId, productId) => {
  const token = localStorage.getItem("token");   // <-- FIXED
  const response = await fetch(`${API_BASE}/cart/remove/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, productId }),
  });
  return await response.json();
};

export const fetchCartAPI = async (userId) => {
  const token = localStorage.getItem("token");   // <-- FIXED
  const response = await fetch(`${API_BASE}/cart/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
};
