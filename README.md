# Bot Diagnostic Viewer

A full-stack, data-driven 3D visualization tool built to demonstrate enterprise-scale, decoupled web architecture. 

This project simulates how complex engineering and vehicle telemetry data can be calculated on a secure backend and distributed to a lightweight web client for interactive 3D rendering.

## Architecture

This application utilizes a decoupled client-server model:

* **The Backend (Source of Truth):** A lightweight, high-performance C# .NET Minimal API. It handles the structural data modeling and serves the exact mathematical properties of the 3D objects as a JSON payload.
* **The Bridge:** Cross-Origin Resource Sharing (CORS) is explicitly configured to allow the frontend to asynchronously fetch the JSON telemetry data upon mounting.
* **The Frontend (Visualization):** A React Single Page Application (SPA) built with Vite. It utilizes `three.js` and React Three Fiber (R3F) to dynamically generate and alter WebGL geometry in real-time based strictly on the data provided by the C# backend.

## Tech Stack

**Frontend:**
* React
* Vite
* Three.js
* React Three Fiber (R3F) & Drei

**Backend:**
* C#
* .NET 10 SDK (Minimal API)

## Getting Started

To run this project locally, you will need two terminal windows to run the decoupled servers simultaneously.

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download) installed

### 1. Start the Backend (.NET API)
Navigate to the `backend` directory, build, and run the server:
```bash
cd backend
dotnet run
```
Note the localhost port the server is listening on (e.g., http://localhost:5000). If your port differs, ensure the fetch URL in App.jsx is updated to match.

### 2. Start the Frontend (React / Vite)
Open a second terminal, navigate to the frontend directory, install the dependencies, and start the Vite development server:

```Bash
cd frontend
npm install
npm run dev
```
### 3. Usage
Once both servers are running, open your browser to the local Vite port (usually http://localhost:5173).

- You will see the dynamically generated 3D bolt floating in the Canvas.
- Left-click and drag to orbit the camera.
- Scroll to zoom in and out.
- To prove the data connection, alter the properties of the Bolt record in backend/Program.cs, restart the .NET server, and watch the browser geometry instantly change to match the new backend data.
