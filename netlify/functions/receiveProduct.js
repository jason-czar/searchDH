// netlify/functions/receiveProduct.js
exports.handler = async (event, context) => {
  try {
    // Parse the incoming JSON body
    const { product_name, brand_name, screenshot_url } = JSON.parse(event.body);

    // TODO: here's where you'd persist to your DB, call another API, etc.
    console.log('Received via Zapier:', { product_name, brand_name, screenshot_url });

    return {
      statusCode: 201,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Error in receiveProduct:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
