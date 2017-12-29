import axios from 'axios';

export const fetchEquipment = () => {
  return {
    type: 'FETCH',
    payload: axios.get(`https://5a333dfb1faf4b001277c68c.mockapi.io/equipment`)
  };
};

export const removeFromList = (post) => {
  return {
    type: 'DELETE',
    payload: axios.get(`https://5a333dfb1faf4b001277c68c.mockapi.io/equipment`, post)
  };
};

export const addEquipment = (gear) => {
  return {
    type: 'ADD',
    payload: axios.post(`https://5a333dfb1faf4b001277c68c.mockapi.io/equipment`, gear)
  };
};
