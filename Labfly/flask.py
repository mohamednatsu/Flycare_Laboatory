import json

from flask import request

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('test.html')

@app.route('/test2', method=['POST'])
def test():
    user = request.get_json()
    print(user)
    
    print()
    print("User is resived")
    print('--------------------')
    
    return 'info request Succseful'


if __name__ == "__main__":
    app.run(debug=True)
    
print('--------------------')
    