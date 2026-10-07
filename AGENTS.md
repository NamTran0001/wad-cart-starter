# Project Rules

## Stack

- Plain JavaScript using Node.js ES modules.
- Tests use Node's built-in `node:test`.
- No runtime dependencies.

## Commands

- Run tests: `npm test`
- Run lint: `npm run lint`

## Implementation rules

- `cartTotal` must be implemented in `src/cart.js`.
- Tests belong in `test/`.
- Keep the implementation dependency-free.
- Use `RangeError` for invalid negative prices and non-positive/non-integer quantities.
- Return a number rounded to the nearest whole đồng.

## Never

- Never add external runtime dependencies.
- Never change the required public behaviour of `cartTotal`.
- Never remove or weaken tests just to make the test suite pass.
- Never commit code without running the test and lint commands.