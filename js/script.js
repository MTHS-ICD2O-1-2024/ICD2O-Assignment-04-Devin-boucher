// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

function calculatePizzaCost() {
  const size = document.querySelector('input[name="size"]:checked').value
  const toppings = parseInt(document.querySelector('input[name="toppings"]:checked').value)

  let baseCost = 0
  if (size === 'large') {
    baseCost = 6.00
  } else if (size === 'extraLarge') {
    baseCost = 10.00
  }

  let toppingCost = 0
  if (toppings === 1) {
    toppingCost = 1.00
  } else if (toppings === 2) {
    toppingCost = 1.75
  } else if (toppings === 3) {
    toppingCost = 2.50
  } else if (toppings === 4) {
    toppingCost = 3.35
  }

  const subtotal = baseCost + toppingCost
  const tax = subtotal * 0.13
  const total = subtotal + tax

  document.getElementById('result').innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>HST (13%): $${tax.toFixed(2)}</p>
    <p><strong>Total Cost: $${total.toFixed(2)}</strong></p>
  `
}
