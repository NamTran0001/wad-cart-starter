# Brief — cartTotal Implementation

## Task

Implement `cartTotal(items, options)` in `src/cart.js` using plain JavaScript with no external runtime dependencies.

## Files in Scope

- `src/cart.js` — implementation of `cartTotal`
- `test/cart.test.js` — unit tests for `cartTotal`

## Contract

`cartTotal(items, options)` receives:

- `items`: An array of item objects, each formatted as `{ name: string, price: number, qty: number }`.
- `options`: An options object formatted as `{ vatRate: number, freeShipFrom: number, shipFee: number }`.

### Calculation Logic

1. **Subtotal**: Sum of `price × qty` for all items.
2. **VAT**: Calculated as `subtotal × vatRate`.
3. **Shipping**: Set to `0` if `subtotal >= freeShipFrom`; otherwise set to `shipFee`.
4. **Total**: Returns `Math.round(subtotal + VAT + shipping)`.
5. **Return Type**: JavaScript `number`.

## Edge Cases & Error Handling

- **Empty Cart**: If `items` is an empty array `[]`, the function must return `0` immediately (no shipping or VAT applied).
- **Invalid Price**: If any item has a negative `price` (`price < 0`), throw a `RangeError`.
- **Invalid Quantity**: If any item has a `qty` that is not a positive integer (i.e., `qty <= 0` or `!Number.isInteger(qty)`), throw a `RangeError`.

## Worked Example

Given:
- `items`: `[{ name: 'A', price: 180000, qty: 2 }, { name: 'B', price: 45000, qty: 1 }]`
- `options`: `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`

Calculation:
- `subtotal` = `(180000 × 2) + (45000 × 1)` = `405000`
- `VAT` = `405000 × 0.08` = `32400`
- `shipping` = `30000` (since `405000 < 500000`)
- `total` = `405000 + 32400 + 30000` = **`467400`**