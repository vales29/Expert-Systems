"""
AthletaFit | Sports Preference Expert System
Local Python Server Launcher

This script starts a local web server using Python's built-in standard library,
allowing you to run the AthletaFit frontend application locally without any external
dependencies (like Flask or npm). It automatically opens the application in your browser.

Usage:
    python server.py
"""

import http.server
import socketserver
import os
import webbrowser
import sys

# Define port and serving directory
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler to ensure files are served from the script's directory"""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        """Silences standard HTTP logs to keep the console clean and sporty"""
        # Uncomment the line below if you want to see active network requests in console
        # super().log_message(format, *args)
        pass

def start_server():
    # Set CWD to script directory to guarantee relative path integrity
    os.chdir(DIRECTORY)
    
    print("=" * 60)
    print(" ⚡  ATHLETAFIT | SPORTS PREFERENCE FINDER SERVER  ⚡")
    print("=" * 60)
    print(f"Directory:  {DIRECTORY}")
    print(f"Local URL:  http://localhost:{PORT}")
    print("=" * 60)
    print("👉 Starting local server...")
    
    # Enable socket reuse to prevent "Address already in use" errors on quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
            print("🟢 Server running successfully!")
            print("🚀 Launching AthletaFit in your default web browser...")
            print("💡 Press Ctrl + C in this terminal window to stop the server at any time.")
            print("-" * 60)
            
            # Automatically open browser window
            webbrowser.open(f"http://localhost:{PORT}")
            
            # Keep server running
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🔴 Server stopped by user request. Thank you for using AthletaFit!")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Error starting server: {e}")
        print("💡 Tip: Make sure port 8000 is not already being used by another application.")
        sys.exit(1)

if __name__ == "__main__":
    start_server()
