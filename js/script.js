// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// Constants for topping prices
const TOPPING_PRICE_1 = 0.5
const TOPPING_PRICE_2 = 0.9
const TOPPING_PRICE_3 = 1.25
const TOPPING_PRICE_4 = 1.75

// Constant for tax rate
const TAX_RATE = 0.13

// eslint-disable-next-line no-unused-vars
function calculateCupcakeCost () {
  // Get selected cupcake size
  const sizeRadios = document.getElementsByName('size')
  let sizeValue = ''
  if (sizeRadios[0].checked) {
    sizeValue = sizeRadios[0].value
  } else if (sizeRadios[1].checked) {
    sizeValue = sizeRadios[1].value
  }

  // Get selected number of toppings
  const toppingRadios = document.getElementsByName('toppings')
  let toppingCount = 0
  for (let i = 0; i < toppingRadios.length; i++) {
    if (toppingRadios[i].checked) {
      toppingCount = parseInt(toppingRadios[i].value)
    }
  }

  // Calculate base cost
  let basePrice = 0
  if (sizeValue === 'large') {
    basePrice = 2.0
  } else if (sizeValue === 'extraLarge') {
    basePrice = 3.5
  }

  // Calculate topping cost using constants
  let toppingPrice = 0
  if (toppingCount === 1) {
    toppingPrice = TOPPING_PRICE_1
  } else if (toppingCount === 2) {
    toppingPrice = TOPPING_PRICE_2
  } else if (toppingCount === 3) {
    toppingPrice = TOPPING_PRICE_3
  } else if (toppingCount === 4) {
    toppingPrice = TOPPING_PRICE_4
  }

  const subtotal = basePrice + toppingPrice
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  // Display image
  document.getElementById('cupcake-image').style.display = 'block'

  // Display the results
  document.getElementById('result').innerHTML =
    '<p>Subtotal: $' + subtotal.toFixed(2) + '</p>' +
    '<p>HST (13%): $' + tax.toFixed(2) + '</p>' +
    '<p><strong>Total Cost: $' + total.toFixed(2) + '</strong></p>'
}
