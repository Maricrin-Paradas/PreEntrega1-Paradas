import React from "react";
import img1 from "../img/image 5.png";
import img2 from "../img/image 7.png";
import img3 from "../img/image 8.png";
import img4 from "../img/image 9.png";
import img5 from "../img/image 10.png";
import img6 from "../img/image 11.png";
import img7 from "../img/image 12.png";
import img8 from "../img/image 13.png";

const ItemListContainer = () => {
  const lista = [
    {
      id: 1,
      name: "Kit Agujas de Ganchillo",
      price: "$26.417",
      stock: 20,
      img: img1,
    },
    {
      id: 2,
      name: "Kit Implementos Basicos",
      price: "$8.990",
      stock: 20,
      img: img2,
    },
    { id: 3, name: "Kit Marcadores", price: "$3.990", stock: 20, img: img3 },
    {
      id: 4,
      name: "Kit Agujas de Palillo",
      price: "$9.000",
      stock: 20,
      img: img4,
    },
    {
      id: 5,
      name: "Revesderecho Linea Kids Soft",
      price: "$2.990",
      stock: 20,
      img: img5,
    },
    {
      id: 6,
      name: "Revesderecho Linea Kids Smile",
      price: "$2.990",
      stock: 20,
      img: img6,
    },
    {
      id: 7,
      name: "Revesderecho Linea Kids Soft",
      price: "$2.990",
      stock: 20,
      img: img7,
    },
    {
      id: 8,
      name: "Revesderecho Linea Kids Soft Chips",
      price: "$2.990",
      stock: 20,
      img: img8,
    },
  ];
  return (
    <>
      <div className="card-title m-5">Catalogo</div>
      <div className="flex flex-wrap ">
      {lista.map((elemento, indice) => {
        return (
          <div className="card w-96 bg-base-190 shadow-xl m-5"ey={elemento.id}>
            <figure> <img src={elemento.img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title"> {elemento.name}</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Precio {elemento.price}</div>
                <div className="badge badge-outline">Stock {elemento.stock}</div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default ItemListContainer;
