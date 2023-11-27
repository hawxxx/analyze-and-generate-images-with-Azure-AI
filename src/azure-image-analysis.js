// azure-image-analysis.js
const analyzeImage = async (imageUrl) => {
    const subscriptionKey = process.env.REACT_APP_AZURE_VISION_KEY;
    const endpoint = process.env.REACT_APP_AZURE_VISION_ENDPOINT;
    console.log('Endpoint:', endpoint);
    console.log('Subscription Key:', subscriptionKey);
    const response = await fetch(`${endpoint}vision/v4.0/analyze?visualFeatures=Categories,Description,Color,Caption`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey
      },
      body: JSON.stringify({ url: imageUrl })
    });
  
    return await response.json();
  };
  
  export default analyzeImage;
  