const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
];
//Используем метод append.
const renderPhoneListFirstMethod = (array) => {
  let divWithPhones = document.createElement("div");
  for (let i = 0; i < array.length; i++) {
    let PhoneModel = document.createElement("h2");
    let PhoneBrand = document.createElement("h3");
    let PhoneList = document.createElement("ul");
    let pricePhone = document.createElement("p");
    PhoneModel.innerHTML = array[i].name;
    PhoneBrand.innerHTML = array[i].brand;
    array[i].properties.forEach((property) => {
      let liPhoneList = document.createElement("li");
      liPhoneList.innerHTML = property;
      PhoneList.append(liPhoneList);
    })
    pricePhone.innerHTML = `Price: ${array[i].price}`;
    divWithPhones.append(PhoneModel, PhoneBrand, PhoneList, pricePhone);
  }
  document.body.append(divWithPhones);
  return divWithPhones;
}
//console.log(`append`, renderPhoneListFirstMethod(products));

//Используем метод innerHTML с шаблонными строками
const renderPhoneListSecondMethod = (array) => {
  let divWithPhones = document.createElement("div");
  let container = [];
  array.map((phone) => {
    container.push(`
    <h2>${phone.name}</h2>
    <h3>${phone.brand}</h3>
    <ul>
    ${phone.properties.map((property) => `<li>${property}</li>`).join(" ")}
    </ul>
    <p>Price: ${phone.price}</p>
  `)
  });
  divWithPhones.innerHTML = container.join(" ");
  document.body.append(divWithPhones);
  return divWithPhones;
}
console.log(`innerHTML`, renderPhoneListSecondMethod(products));