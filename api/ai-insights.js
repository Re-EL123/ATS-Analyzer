// Serverless function to handle AI insights
// This keeps your API token secure on the server side

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, overallScore, categoryScores, issuesCount, hasJobDescription } = req.body;

    // Validate input
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Get API token from environment variable
    const apiToken = process.env.HF_TOKEN;

    if (!apiToken) {
      console.error('HF_TOKEN environment variable is not set');
      return res.status(500).json({ 
        error: 'Server configuration error',
        fallback: true 
      });
    }

    // Call Hugging Face API
    const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      },
      body: JSON.stringify({
        model: 'deepseek-ai/DeepSeek-V3.2-Exp:novita',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    // Check if request was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API error:', response.status, errorText);
      
      // Return fallback response
      return res.status(200).json({
        fallback: true,
        message: 'AI insights temporarily unavailable. Your analysis is complete and you can still see all scoring details above.'
      });
    }

    const data = await response.json();

    // Return the AI response
    return res.status(200).json({
      success: true,
      content: data.choices[0].message.content,
      model: data.model
    });

  } catch (error) {
    console.error('AI API Error:', error);
    
    // Return graceful fallback
    return res.status(200).json({
      fallback: true,
      message: 'AI insights are temporarily unavailable. Your comprehensive analysis is complete and available above.'
    });
  }
}
