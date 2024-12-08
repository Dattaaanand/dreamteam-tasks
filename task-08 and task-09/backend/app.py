from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)
db = mysql.connector.connect(host = "localhost", port = 3306, user = "root", password = "sqldxttu", database = "letterboxd")
cursor = db.cursor()

@app.route('/register', methods = ['POST'])
def register():
    data = request.json
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')
    
    try:
        cursor.execute("insert into users (email, username,password) values (%s, %s, %s)", (email, username, password))
        db.commit()
        return jsonify({"message":"User Registered Successfully"}), 200
    except mysql.connector.error as e:
        return jsonify({"message":str(e)}), 400

@app.route('/login', methods = ['POST'])
def login():
    data = request.json
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    try:
        cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
        user = cursor.fetchone()

        if user:
            return jsonify({"message": "Login successful", "username": user[1]}), 200  
        else:
            return jsonify({"message": "Check your credentials"}), 400
    except mysql.connector.Error as e:
        return jsonify({"message": "Database error"}), 500
if __name__ == '__main__':
    app.run(debug=True)

# Invoke-WebRequest -Uri http://127.0.0.1:5000/register -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email": "test@example.com", "username": "testuser", "password": "securepassword"}'
# Used this to check whether connection was proper.