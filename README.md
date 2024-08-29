
# Sea Surface Temperature DataHub

Sea Surface Temperature Data Hub is a web service that allows users to upload ZIP archives containing statistical data about sea surface temperatures around the globe and generate heat maps based on the provided data. This tool is ideal for researchers, students, and enthusiasts looking to analyze ocean temperature trends and visualize them in an interactive manner.


## Features

- Upload Data: Easily upload ZIP archives with sea surface temperature data.
- Heat Map Generation: Automatically generate heat maps from the uploaded data, visualizing temperature variations across different regions.
- Interactive Visualization: Explore the generated maps interactively to uncover patterns and insights.


## Getting Started

To get started with the Sea Surface Temperature Data Hub, follow the steps below:

### Prerequisites

- Node.js installed on your machine.
- Git for cloning the repositories.

### Clone and Setup the Repositories

1. Clone the Web Service Repository:

```bash
  git clone https://github.com/OlgaBieliaieva/sst-map-front
  cd sst-map-front
```

2. Install Dependencies:

```bash
  npm install
  npm run build
```

3. Run the Web Service Locally:

```bash
  npm run dev
```

### Setting Up the API Server

The web service relies on a backend API to process the uploaded data and generate heat maps. Follow these steps to set up the API server locally:

1. Clone the API Server Repository:

The deployed API on Render.com ([API Link](https://sst-map-api.onrender.com)) does not have sufficient memory to process large datasets efficiently. To ensure optimal performance, clone and run the API server locally:

```bash
  git clone https://github.com/OlgaBieliaieva/sst-map-api
  cd sst-map-api
```

2. Install API Server Dependencies:

```bash
  npm install
  npm run build
```

3. Configure Environment Variables
`PORT=4000`

`CLOUDINARY_CLOUD_NAME=de3wlojzp`

`CLOUDINARY_API_KEY=761338692484449`

`CLOUDINARY_API_SECRET=dlslOWGcpTkkYaSFTeehiFCkx9A`

#### Note: 
The provided Cloudinary credentials have limited usage and may not be suitable for extended use. It is recommended to obtain your own credentials by signing up at Cloudinary.com and configuring them in your .env file.


4. Run the API Server Locally:

```bash
  npm start
```

The API server will start on http://localhost:4000, and the web service will connect to this local instance for processing.
## Usage

1. Upload: Click on the "Upload your archive" button to select and upload a ZIP file containing sea surface temperature data.
2. View Heatmap: After processing, the service will display a link for heatmap visualizing the temperature data.
3. Download: Download the heatmap for your records or further analysis.


## Troubleshooting

- Ensure the API server is running locally on the specified port (4000).
- Verify that your .env file is correctly set up with valid Cloudinary credentials.
- Check the browser console and server logs for any errors if the heatmap does not generate as expected.
## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or enhancements.

## Contact


For further information or queries, please contact Olha Shapoval.

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/olha-shapoval)