import fetch from 'node-fetch';

const SHOPIFY_API_URL = 'https://rr0pbf-0j.myshopify.com/admin/api/2023-01/products.json';

const SHOPIFY_API_KEY = '7744ddcafb2770592447cfacdea2676e2';
const SHOPIFY_ACCESS_TOKEN = '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';

export async function fetchProducts() {
  if (!SHOPIFY_API_URL || !SHOPIFY_ACCESS_TOKEN) {
    throw new Error('Shopify API URL hoặc API Access Token chưa được cấu hình');
  }

  const response = await fetch(SHOPIFY_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Shopify API error: ${response.status} - ${response.statusText}, Details: ${errorText}`);
  }

  const data = await response.json();
  return data.products;
}
