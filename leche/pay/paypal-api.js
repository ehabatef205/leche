import fetch from "node-fetch";

const CLIENT_ID = "AbHZZAi6Hm95o2PH8A8C0l8bNO9N4kAqrACsL44T2ziyvLe8BFHEpw5Z2Sau0Wbfozu7YzeNFcO10hyc"
const APP_SECRET = "EHWamogRI8g9yLhms_RAnHy58-pVmS6kXxyFAEFQn3RirvqltZGdPIAS66WR92BKIObWZe6ZHPtsPweM"

const base = "https://api-m.sandbox.paypal.com";

export async function createOrder(data) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: data.products.cost,
          },
        },
      ],
    }),
  });

  return handleResponse(response);
}

export async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
}

export async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const jsonData = await handleResponse(response);
  return jsonData.access_token;
}

async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}