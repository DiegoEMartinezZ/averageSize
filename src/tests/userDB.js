const userDB = [
  {
    id: 1,
    name: "Diego",
    email: "diermaza.23@gmail.com",
    links: [],
    totalLinks: 0,
  },
  {
    id: 2,
    name: "Camila",
    email: "cami@gmail.com",
    links: [],
    totalLinks: 0,
  },
  {
    id: 3,
    name: "juan",
    email: "juan@gmail.com",
    links: [],
    totalLinks: 0,
  },
  {
    id: 4,
    name: "Andres",
    email: "anfemaza@gmail.com",
    links: [],
    totalLinks: 0,
  },
];

export const initializeLocalStorage = () => {
  if (!localStorage.getItem("userDB")) {
    localStorage.setItem("userDB", JSON.stringify(userDB));
  }
  return JSON.parse(localStorage.getItem("userDB"));
};

export default userDB;
