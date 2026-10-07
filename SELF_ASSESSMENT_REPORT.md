# Self-Assessment Report

| Rubric criterion | Claimed marks | Evidence |
|---|---:|---|
| Behaviour | 30/30 | `src/cart.js`. Calculates subtotal, VAT and shipping, handles free shipping at the threshold, returns 0 for an empty cart, checks invalid price/quantity with `RangeError`, and rounds the final result. |
| Tests | 20/20 | `test/cart.test.js`. Tests cover the worked example, empty cart, free-shipping threshold, negative price, non-integer quantity and non-positive quantity. Final test run passed 6/6. |
| Harness | 20/20 | `AGENTS.md`, `package.json` and `.github/workflows/ci.yml`. Includes the required commands, project rules, lint check and CI workflow. |
| Brief | 15/15 | `BRIEF.md`. Describes the task, files in scope, function contract, edge cases and worked example. |
| AI-LOG | 15/15 | `AI-LOG.md`. Records how I used ChatGPT, what suggestions I followed, and what I changed while working on the assignment. |

## Total claimed

**100/100**

## What I did not manage

I completed the required implementation, tests, harness, brief and AI log. I did not add extra features outside the assignment because they were not required.
