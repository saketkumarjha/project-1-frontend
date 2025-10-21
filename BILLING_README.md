# Hospital Management System - Billing Module

## Overview

The Billing module provides comprehensive billing and payment management functionality for the hospital management system. It includes Razorpay integration for online payments and automatic receipt generation.

## Features

### 1. Bill Management

- **Create Bills**: Generate bills for patients with multiple items/services
- **View Bills**: Comprehensive bill listing with filtering and search
- **Bill Details**: Detailed view of individual bills with itemized breakdown
- **Bill Status**: Track payment status (Pending, Paid, Partially Paid, Cancelled)

### 2. Payment Processing

- **Razorpay Integration**: Secure online payments via UPI, Cards, Net Banking, Wallets
- **Multiple Payment Methods**: Support for Cash, Card (offline), UPI (offline)
- **Payment Tracking**: Complete payment history and transaction details
- **Real-time Updates**: Automatic bill status updates after successful payments

### 3. Receipt Generation

- **Automatic Download**: Receipts automatically download after successful payments
- **HTML Format**: Professional HTML receipts with complete bill details
- **Patient Information**: Includes patient details, UHID, and payment information
- **Itemized Breakdown**: Detailed list of services/items with pricing

### 4. Financial Analytics

- **Revenue Tracking**: Total revenue from paid bills
- **Pending Amounts**: Track outstanding payments
- **Bill Statistics**: Overview of total bills and payment status distribution

## Components

### Pages

- **Billing.tsx**: Main billing dashboard with bill listing and statistics
- **Components**:
  - **BillCard.tsx**: Individual bill display card
  - **BillDetailModal.tsx**: Detailed bill view with payment options
  - **PaymentModal.tsx**: Payment processing interface with Razorpay integration
  - **CreateBillModal.tsx**: Form for creating new bills

### Key Features

#### Bill Creation

- Patient selection from existing patients
- Multiple bill items with categories (Consultation, Medication, Procedure, Room, Laboratory, Other)
- Automatic tax calculation (18% GST)
- Discount application
- Notes and additional information

#### Payment Processing

- **Razorpay Integration**:
  - Test key: `rzp_test_1234567890` (replace with your actual key)
  - Supports all major payment methods
  - Secure payment gateway
  - Real-time payment status updates

#### Receipt System

- Professional HTML receipts
- Automatic download after payment
- Complete transaction details
- Patient and hospital information
- Itemized service breakdown

## Setup Instructions

### 1. Razorpay Configuration

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your API keys from the dashboard
3. Replace the test key in `PaymentModal.tsx`:
   ```typescript
   key: "rzp_test_1234567890", // Replace with your actual key
   ```

### 2. Environment Variables (Optional)

Create a `.env` file in the frontend directory:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_here
```

Then update the PaymentModal to use:

```typescript
key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_1234567890",
```

## Usage

### Creating a Bill

1. Navigate to `/billing`
2. Click "Create Bill"
3. Select patient from dropdown
4. Add bill items with descriptions, categories, quantities, and prices
5. Apply discounts if needed
6. Add notes (optional)
7. Click "Create Bill"

### Processing Payments

1. Click "Pay Now" on any pending bill
2. Select payment method:
   - **Razorpay**: Redirects to secure payment gateway
   - **Cash/Card/UPI**: Simulated offline payment
3. Complete payment process
4. Receipt automatically downloads upon success

### Viewing Bills

- **Filter by Status**: Pending, Paid, Partially Paid, Cancelled
- **Date Range Filtering**: Filter bills by creation date
- **Search**: Search by bill number, patient name, or UHID
- **Detailed View**: Click on any bill to see complete details

## Mock Data

The system includes comprehensive mock data for demonstration:

- Sample bills with various statuses
- Mock patients for bill creation
- Realistic pricing and tax calculations

## Security Features

- Razorpay's secure payment gateway
- Payment verification (implement server-side verification in production)
- Transaction tracking and audit trail
- Secure receipt generation

## Future Enhancements

- Insurance claim integration
- Bulk payment processing
- Advanced reporting and analytics
- Email receipt delivery
- SMS payment notifications
- Recurring billing support

## Technical Details

### Dependencies

- Razorpay Checkout SDK (loaded dynamically)
- React TypeScript
- Tailwind CSS for styling

### File Structure

```
frontend/src/
├── pages/
│   └── Billing.tsx
├── components/
│   ├── BillCard.tsx
│   ├── BillDetailModal.tsx
│   ├── PaymentModal.tsx
│   └── CreateBillModal.tsx
└── types/
    └── index.ts (billing types)
```

### API Integration

The system is designed to work with mock data but can easily be integrated with a backend API. Update the following areas for API integration:

- Replace mock data with API calls
- Implement server-side payment verification
- Add proper error handling and loading states
- Integrate with patient management system

## Support

For issues or questions regarding the billing module, please refer to the main project documentation or contact the development team.
