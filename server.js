import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hostinger will inject PORT env variable, fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  // Extract file path
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

  // If path doesn't have an extension (like a routing path /category/mac),
  // redirect/fallback to index.html for client-side routing
  const ext = path.extname(filePath);
  if (!ext) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If file not found, serve index.html as fallback for React SPA routing
      const indexFallback = path.join(DIST_DIR, 'index.html');
      fs.readFile(indexFallback, (errIndex, content) => {
        if (errIndex) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error: dist/index.html not found. Please build the project first.');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });
      return;
    }

    // Determine content-type
    const contentType = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    
    // Read and pipe the file content
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running and serving static files from dist/ on port ${PORT}`);
});
