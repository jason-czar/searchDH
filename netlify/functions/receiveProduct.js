// netlify/functions/receiveProduct.js
exports.handler = async (event, context) => {
  // Set CORS headers to allow the function to be called from your domain
  const headers = {
    'Access-Control-Allow-Origin': '*', // In production, set this to your specific domain
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    // Parse the incoming JSON body
    const { product_name, brand_name, screenshot_url, session_id } = JSON.parse(event.body);

    console.log('Received via Zapier:', { product_name, brand_name, screenshot_url, session_id });

    // Create HTML that will be sent back to the client
    // This HTML includes a script that uses postMessage to communicate with the parent window
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <script>
          // Send the results to the parent window
          window.onload = function() {
            // Make sure we have a parent window to send to
            if (window.opener) {
              window.opener.postMessage({
                type: 'zapier_results',
                sessionId: '${session_id || ''}',
                results: {
                  product_name: '${product_name || ''}',
                  brand_name: '${brand_name || ''}',
                  screenshot_url: '${screenshot_url || ''}'
                }
              }, '*');
              // Close this window after sending the message
              setTimeout(function() {
                window.close();
              }, 500);
            }
          };
        </script>
      </head>
      <body>
        <h3>Processing Complete</h3>
        <p>Product information has been sent to SearchDH. You can close this window.</p>
      </body>
      </html>
    `;

    // Return HTML response that will handle the communication
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'text/html'
      },
      body: html
    };
  } catch (err) {
    console.error('Error in receiveProduct:', err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
