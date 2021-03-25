# Build app with prodution mode
npm run build

# Move to dist folder
cd dist

# Start deploying via surge
# The command means deploy current folder to domain ave.surge.sh
surge . ave-app.surge.sh
