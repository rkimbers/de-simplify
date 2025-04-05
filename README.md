# de‑simplify

Are you ever tired of sending out countless internship applications without any response? This can be attributed to employers using aggressive application filters, discarding submissions that can be traced back to popular job websites!

de‑simplify is a open source Chrome extension that removes unwanted "Simplify" query parameters (like `utm_source` and `ref`) from URLs before they load. This ensures that links redirect without the extra pesky tracking parameters added by Simplify.

## How It Works

de‑simplify uses Chrome's Manifest V3 "Declarative Net Request" API to automatically strip specified query parameters from any application URL you navigate to.

## Installation

1. Clone the Repository:

   `git clone https://github.com/rkimbers/de-simplify.git`

2. Load the Extension in Chrome:

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable Developer mode (toggle in the top-right corner).
   - Click Load unpacked and select the src folder.

3. Test It Out:

   - Navigate to a URL containing parameters like `?utm_source=Simplify` or `?ref=Simplify`.
   - The extension will automatically clean the URL by removing these parameters.

## Contributing

Contributions are welcome! Please open issues or submit pull requests. If firefox support is in-demand, please let me know!

## License

This project is open source and available under the GNU General Public License. Please refer to the [LICENSE](/LICENSE) file for more details.