from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load teams.json from the same directory
with open('teams.json', 'r') as file:
    teams_data = json.load(file)

@app.route('/api/teams', methods=['GET'])
def get_teams():
    return jsonify(teams_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)