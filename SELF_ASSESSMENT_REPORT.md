# Self-assessment — IA#1

Submitted by: `24127459` - `Tran Van Nam`

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `src/cart.js`. Calculates subtotal, VAT, shipping, free shipping threshold, empty cart, and throws `RangeError` for invalid price/qty. |
| Tests | 20 | 20 | `test/cart.test.js`. Passed all 6 tests covering example calculation, empty cart, threshold, negative price, non-integer qty, and non-positive qty. |
| Harness | 20 | 20 | `AGENTS.md`, `package.json`, `.github/workflows/ci.yml`. `npm test` and `npm run lint` pass locally and in GitHub Actions CI. |
| Brief | 15 | 15 | `BRIEF.md`. Corrected markdown formatting, clearly specifies task, files, contracts, edge cases, and worked example. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md`. Fully documented tool usage, prompts, kept/changed code, rejected suggestions, and manual work. |

## What I did not manage

During initial testing, I accidentally created an untracked file (`tatus`) via PowerShell and left commented-out legacy code in `test/cart.test.js`. I had to clean these up manually before finalizing the submission.

## What I would do differently

I would write the `AI-LOG.md` entries incrementally as I work rather than organizing them right before committing, ensuring exact prompt history and rejected iterations are logged instantly.