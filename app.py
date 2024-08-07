from flask import Flask, request, jsonify
from simpletransformers.conv_ai import ConvAIModel

app = Flask(__name__)

# Инициализация модели
model = ConvAIModel("gpt", "models", use_cuda=False)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    response = model.interact_single(user_input, history=[])
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
