# Dodo Payments Dashboard

## Overview

Dodo Payments Dashboard is a web application designed to provide insights and analytics for transaction data, featuring interactive graphs and a responsive user interface.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Tooling**: Vite (for development and build)
- **Charts**: Recharts
- **UI Components**: Radix UI, Tabler Icons
- **Data Management**: `@tanstack/react-query`

## Features

- **Interactive Graphs**: Visualize transaction data with interactive charts powered by Recharts.
- **Responsive Design**: Ensures optimal viewing experience across devices of all sizes.
- **Efficient Data Fetching**: Utilizes `@tanstack/react-query` for efficient data fetching and caching.
- **Modern UI Components**: Leverages Radix UI and Tabler Icons for a sleek and consistent UI.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/dodo_payments_dashboard.git
   cd dodo_payments_dashboard
  ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Set up the environment variables:

   ```sh
   cp .env.example .env
   ```

   Update `.env` with your PostgreSQL connection details.

4. Run the database migrations:

   ```sh
   pnpm drizzle-kit generate:pg
   pnpm tsx src/migration.ts
   ```

5. Start the server:
   ```sh
   pnpm dev
   ```

> [!NOTE]  
> NB: Please be patient with the api response for transaction and invoice. The service is hosted on a free platform and takes sometime to spin the server after inactivity .

#### App URL : https://dodo-dashboard-gold.vercel.app