const data = [
  {
    id: 1,
    name: "Casio 10 Year Battery ",
    img: "https://m.media-amazon.com/images/I/618sFNQTZYL._AC_UL320_.jpg",
    cat: "Dress",
    price: 22,
  },
  {
    id: 2,
    name: "Invicta Men's 12847 Speciaty",
    img: "https://m.media-amazon.com/images/I/712OkHFNzCL._AC_UL320_.jpg",
    cat: "Dress",
    price: 24,
  },
  {
    id: 5,
    name: "Timex Ironman Classic",
    img: "https://m.media-amazon.com/images/I/71mewE+svdL._AC_UL320_.jpg",
    cat: "Sport",
    price: 39,
  },
  {
    id: 4,
    name: "CASIO Men's G-9400-1CR",
    img: "https://m.media-amazon.com/images/I/91hUphuFi3L._AC_UL320_.jpg",
    cat: "Luxury",
    price: 230,
  },
  {
    id: 6,
    name: "Portzon Smart Watch for iOS",
    img: "https://m.media-amazon.com/images/I/61y+obeuYeL._AC_UL320_.jpg",
    cat: "Sport",
    price: 44,
  },
  {
    id: 3,
    name: "Fossil Men's Townsman",
    img: "https://m.media-amazon.com/images/I/71xa+irvWZL._AC_UL320_.jpg",
    cat: "Casual",
    price: 75,
  },
];

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `<div class="product">
      <img
        src=${product.img}
        alt=""
      />
      <span class="name">${product.name}</span>
      <span class="priceText">$${product.price}</span>
      </div>
      `
    )
    .join("");
};
displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  // console.log(value);
  //const s = "lamadev"
  //s.indexOf("d") 4
  //s.indexOf("o") -1

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  // console.log(allCats);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];
  //console.log(categories);
  categoriesContainer.innerHTML = categories
    .map((cat) => `<span class="cat">${cat}</span>`)
    .join("");
  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};
const setPrices = () => {
  const priceList = data.map((item) => item.price);
  //console.log(priceList);
  //Math.max(2,3) 3
  //Math.min(2,3) 2
  //Math.min([1,2]) NaN
  //Math.min(...[1,2]) 1
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  //console.log(minPrice, maxPrice);
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;
};
setPrices();

setCategories();
