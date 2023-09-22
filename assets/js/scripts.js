function displayCocktail(data) {
  const dataVal = data.results;
  const cocktailDiv = document.getElementById("wrap");

  let limit = 10;
  let count = 0;
  for (let key in dataVal) {
    let value = dataVal[key];
    //image
    let image = document.createElement("img");
    image.setAttribute("src", value.picture.large);
    cocktailDiv.appendChild(image);
    //name
    let name = document.createElement("h3");
    name.innerHTML = `Hey I'm ` + value.name.first + " " + value.name.last;
    cocktailDiv.appendChild(name);
    //address
    let addr = document.createElement("p");
    addr.innerHTML = value.location.city + ", " + value.location.state;
    cocktailDiv.appendChild(addr);
    //email
    let email = document.createElement("a");
    email.setAttribute("href", `mailto:value.email`);
    email.innerHTML = "<b>Email me</b> : " + value.email;
    cocktailDiv.appendChild(email);
    //phone
    let phone = document.createElement("a");
    phone.setAttribute("href", `tel:value.phone`);
    phone.innerHTML = "<b>Call On</b> : " + value.phone;
    cocktailDiv.appendChild(phone);
  }
}

function rg(m, n) {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function hex(i) {
  return i.toString(16);
}

function randColor() {
  return (
    "#" +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15))
  );
}
const bg = document.getElementById("overlay");
bg.style.background = randColor();
