import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal([], options), 0)
})

test('shipping is free at the threshold', () => {
  const items = [
    { name: 'Sản phẩm', price: 500000, qty: 1 },
  ]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal(items, options), 500000)
})

test('a negative price throws RangeError', () => {
  const items = [
    { name: 'Sản phẩm lỗi', price: -10000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.throws(
    () => cartTotal(items, options),
    RangeError,
  )
})

test('a non-integer quantity throws RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.throws(
    () => cartTotal([{ name: 'Sản phẩm', price: 10000, qty: 1.5 }], options),
    RangeError,
  )
})

test('a non-positive quantity throws RangeError', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.throws(
    () => cartTotal([{ name: 'Sản phẩm', price: 10000, qty: 0 }], options),
    RangeError,
  )

})
