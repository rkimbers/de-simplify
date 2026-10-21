# de‑simplify

Are you ever tired of sending out countless internship applications without any response? This can be attributed to employers using aggressive application filters, discarding submissions that can be traced back to popular job websites!

de‑simplify is a open source Chrome extension that removes unwanted "Simplify" query parameters (like `utm_source`, `ref`, and `gh_src`) from URLs before they load — but only when the parameter value is `Simplify`. This ensures that links redirect without the extra pesky tracking parameters added by Simplify, while leaving real referral links (for example a recruiter's `?ref=abc`) intact.

## How It Works

de‑simplify uses Chrome's Manifest V3 "Declarative Net Request" API to automatically strip specified query parameters from any application URL you navigate to, when their value matches Simplify (case-insensitive).

## Installation

1. Clone the Repository:

   `git clone https://github.com/rkimbers/de-simplify.git`

2. Load the Extension in Chrome:

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable Developer mode (toggle in the top-right corner).
   - Click Load unpacked and select the src folder.

3. Test It Out:

   - Open `https://example.com/?utm_source=Simplify&ref=abc` and confirm only `utm_source` gets removed.

## Contributing

Contributions are welcome! Please open issues or submit pull requests. If firefox support is in-demand, please let me know!

## License

This project is open source and available under the GNU General Public License. Please refer to the [LICENSE](/LICENSE) file for more details.
