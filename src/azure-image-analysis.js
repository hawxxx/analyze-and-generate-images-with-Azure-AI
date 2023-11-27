// Azure Image Analysis
const analyzeImage = async (imageUrl) => {
    const subscriptionKey = 'process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY';
    const endpoint = 'process.env.REACT_APP_AZURE_ENDPOINT';
  
    const response = await fetch(`${endpoint}vision/v4.0/analyze?visualFeatures=Categories,Description,Color`, {
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
  