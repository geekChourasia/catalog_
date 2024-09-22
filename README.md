# React Area Chart with Interval Selection

This project is a React-based charting application that uses the `react-chartjs-2` library to create an area chart. The chart displays price data over different intervals, such as 1 day, 3 days, 1 week, etc. You can select an interval to see the corresponding price data, with a smooth shaded area under the line.

## Features

- **Interval Selection**: Users can choose between different time intervals like "1d", "1w", "1m", etc.
- **Area Chart**: A line chart with a filled shaded area below the line.
- **Smooth Transitions**: The interval selection buttons feature smooth transitions and hover effects.
- **Data Simulation**: Simulated price data is provided for different intervals.
- **Loading Indicator**: A loading spinner is shown when fetching data for the chart.

## Components

### 1. `App.js`
The main entry point that combines all components (`HeaderComponent`, `TabsComponent`, `IntervalComponent`, and `AreaChartComponent`).

### 2. `HeaderComponent.js`
Displays the price value and percentage change.

### 3. `TabsComponent.js`
A tab component for navigating between different views (e.g., Chart, Statistics, etc.).

### 4. `IntervalComponent.js`
A button group component that allows the user to switch between different time intervals.

### 5. `AreaChartComponent.js`
Displays the price data as an area chart. It uses `react-chartjs-2` for rendering the chart and provides smooth transitions between different intervals.

## Installation

To set up and run the project locally, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/your-repo/react-area-chart.git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
