# Use official Python image
FROM python:3.11

# Set working directory in container
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app files
COPY . .

# Expose port Flask will run on
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
