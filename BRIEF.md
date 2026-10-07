# cartTotal Implementation Brief

## Task

Implement `cartTotal(items, options)` in `src/cart.js` using plain JavaScript with no external dependencies.

## Files in scope

- `src/cart.js` — implementation of `cartTotal`
- `test/cart.test.js` — tests for the required behaviour

Do not add runtime dependencies.

## Contract

`cartTotal(items, options)` receives:

- `items`: an array of objects with `{ name, price, qty }`
- `options`: `{ vatRate, freeShipFrom, shipFee }`

The function calculates:

1. `subtotal` = sum of `price × qty` for all items.
2. VAT = `vatRate × subtotal`.
3. Shipping = `0` when `subtotal >= freeShipFrom`; otherwise `shipFee`.
4. Return `subtotal + VAT + shipping`, rounded to the nearest whole đồng.
5. The return value must be a JavaScript `number`.

## Edge cases

- An empty cart returns `0`, with no VAT and no shipping.
- A negative `price` throws `RangeError`.
- A `qty` that is not a positive integer throws `RangeError`.

## Acceptance example

For:

- `2 × 180000`
- `1 × 45000`
- `vatRate = 0.08`
- `freeShipFrom = 500000`
- `shipFee = 30000`

the subtotal is `405000`, VAT is `32400`, shipping is `30000`, and the result must be `467400`.
