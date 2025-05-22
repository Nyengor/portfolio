// declare variable to store navbar element
const navElement = document.getElementById("navbar")
// detect scroll evnet on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change nav bar bg to blue
        navElement.style.backgroundColor = "#2A8AE7";
    }
    else {
        // change nav bar to transparent
        navElement.style.backgroundColor = "transparent";
    }
});


// Objects and Arrays
// const products = []
const product1 = {
  name:'Digestive',
  price: 45.56,
  available: true,
}

const product2 = {
  name: 'cookies',
  price: 56,
  available: false,
}

const products = [product1, product2]
// products.push(product1, product2)

console.table(products);
