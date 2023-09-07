const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
images.forEach((el) => {
  let li = document.createElement("li");
  gallery.append(li);
  let liContent = `<img src="${el.url}" alt="${el.alt}" width=200>`;
  gallery.insertAdjacentHTML("beforeend", liContent);
});
//---------------------
//
//
//
//
//
//
//
// const elOfGalery = document.querySelector(".gallery");

// images.forEach((el) => {
//   let li = document.createElement("li");
//   elOfGalery.append(li);
//   let string = `<img src="${el.url}" alt="${el.alt}" width="200">`;
//   li.insertAdjacentHTML("beforeend", string);
// });
