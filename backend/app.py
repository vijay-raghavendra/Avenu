from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.get_json()
    print(f"Received data: {data}")
    # You can add any processing logic here
    return jsonify({"message": "Data received and processed", "data": data})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=5000)
