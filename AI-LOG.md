# AI-LOG

## AI tool used

- ChatGPT
- Gemini

## How I used AI

I used ChatGPT to help me understand the assignment requirements and check my work while implementing `cartTotal`.

I added the `AGENTS.md` file, the `npm run lint` command, and a GitHub Actions workflow to run tests and linting on every push, after consulting on the appropriate rules and how to configure the necessary constraints and requirements.

I also asked ChatGPT to help me plan the tests required by the rubric. Based on that, I added tests for:

- the given example returning `467400`
- an empty cart
- free shipping at the threshold
- negative price throwing `RangeError`
- non-integer quantity throwing `RangeError`
- non-positive quantity throwing `RangeError`

For `src/cart.js`, ChatGPT suggested an implementation based on the specification. I reviewed it and used it as the basis for my implementation.

## What I changed myself

I checked the code against the assignment requirements and ran the commands myself.

I noticed that an old commented-out version of the starter test was still at the bottom of `test/cart.test.js`, so I removed it.

I also accidentally created an untracked file called `tatus` while working in PowerShell. I removed that file before committing.

The first version of `BRIEF.md` also had escaped Markdown characters such as `\#` and `\*`. I noticed this when checking the file and corrected it to normal Markdown.

## Verification

Before implementing the function, I ran the original test and confirmed that it failed because `cartTotal` was still not implemented.

After implementing the function and adding the tests:

- `npm test` passed all 6 tests.
- `npm run lint` passed.
- `git status` showed a clean working tree after committing.

## Commits

- `7c887ef` - `docs: add repository link`
- `a3d2027` - `Update project`
- `8ac16a6` - `docs: fix brief, add AI log and self assessment`
- `f7d810e` - `Implement cart total and add tests`

