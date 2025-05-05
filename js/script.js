'use strict'

function calculateCupcakeCost() {
  // Get selected cupcake size
  const sizeRadios = document.getElementsByName("size")
  let sizeValue = ""
  for (let i = 0; i < sizeRadios.length; i++) {
    if (sizeRadios[i].checked) {
      sizeValue = sizeRadios[i].value
    }
  }

  // Get selected number of toppings
  const toppingRadios = document.getElementsByName("toppings")
  let toppingCount = 0
  for (let i = 0; i < toppingRadios.length; i++) {
    if (toppingRadios[i].checked) {
      toppingCount = parseInt(toppingRadios[i].value)
    }
  }

  // Calculate base cost
  let basePrice = 0
  if (sizeValue === "large") {
    basePrice = 2.0
  } else if (sizeValue === "extraLarge") {
    basePrice = 3.5
  }

  // Calculate topping cost
  let toppingPrice = 0
  if (toppingCount === 1) {
    toppingPrice = 0.5
  } else if (toppingCount === 2) {
    toppingPrice = 0.9
  } else if (toppingCount === 3) {
    toppingPrice = 1.25
  } else if (toppingCount === 4) {
    toppingPrice = 1.75
  }

  const subtotal = basePrice + toppingPrice
  const tax = subtotal * 0.13
  const total = subtotal + tax

  // Display image
  document.getElementById("cupcake-image").style.display = "block"

  // Display the results
  document.getElementById("result").innerHTML =
    "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
    "<p>HST (13%): $" + tax.toFixed(2) + "</p>" +
    "<p><strong>Total Cost: $" + total.toFixed(2) + "</strong></p>"
}
