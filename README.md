# 💳 Razorpay Payment Integration

This is a full-stack Razorpay payment integration project built using **HTML, CSS, JavaScript**, and **Node.js (Express)**.  
It allows users to make secure payments using the Razorpay Checkout system with backend support for dynamic order creation.

---

## 🚀 Live Demo

- 🌐 Frontend: [https://razorpay-payment-anand.netlify.app](#)


---


## 🧠 About This Project

This project is part of my learning journey in **full-stack development**.  
It simulates a real-world payment flow by integrating Razorpay’s payment gateway, dynamically generating orders from the backend and showing the payment status on the frontend.

---

## 🛠 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Payment Gateway**: Razorpay SDK

---

## ⚙️ How It Works

1. User clicks on the "Pay Now" button.
2. The frontend sends a POST request to the `/payment` API.
3. Backend uses Razorpay SDK to create an order with amount and currency.
4. Razorpay Checkout opens for user to complete the payment.
5. Payment status is shown (success or failure).

