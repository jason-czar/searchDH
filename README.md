# SearchDH

![SearchDH Logo](SearchDH.png)

A specialized search application that helps users find DHgate alternatives to products from other e-commerce sites. Simply paste a product URL and get relevant DHgate results in seconds.

## Features

- **URL-based Product Search**: Paste any product URL to find similar items on DHgate
- **Intelligent Extraction**: Automatically extracts product information from pasted URLs
- **Special Nike Support**: Enhanced extraction for Nike product URLs
- **Mobile Responsive**: Fully optimized for mobile devices
- **Clean, Modern UI**: Minimalist design with intuitive interface

## How It Works

1. Paste a product URL from any e-commerce site into the search box
2. The application extracts product information (title, brand, etc.) from the URL or webpage content
3. A search is automatically performed on DHgate using the extracted information
4. Results are displayed with product images, titles, and prices

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **Search Engine**: Google Custom Search Engine (CSE) with DHgate-specific configuration
- **CORS Handling**: Uses AllOrigins proxy service to fetch webpage content
- **Deployment**: Hosted on Netlify with continuous deployment from GitHub

## Development

### Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/jason-czar/searchDH.git
   cd searchDH
   ```

2. Open the project in your preferred code editor

3. Since this is a static site, you can simply open `GoogleSearch.html` in a browser to view it

### Making Changes

1. Edit the HTML, CSS, or JavaScript files as needed
2. Test your changes locally
3. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```

4. The site will automatically deploy via Netlify

## License

MIT License

## Contact

For questions or feedback, please open an issue on the GitHub repository.
