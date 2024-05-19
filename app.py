# from flask import Flask, request
# import mysql.connector

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return open('index.html').read()

# @app.route('/index.html', methods=['POST'])
# def submit_form():
#     # Create a connection to the database
#     connection = mysql.connector.connect(host='localhost', port='3307',
#                                          database='Podlogin',
#                                          user='root',
#                                          password='8520', auth_plugin='mysql_native_password')

#     # Create a cursor object
#     cursor = connection.cursor()

#     # Get the form data
#     email = request.form['email']
#     password = request.form['password']

#     # Insert the data into the database
#     cursor.execute("INSERT INTO loginuser (email, password) VALUES (%s, %s)", (email, password))

#     # Commit the changes
#     connection.commit()

#     # Close the connection
#     connection.close()

#     return 'Form submitted successfully!'

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, render_template, redirect, url_for, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'd1f22ca50aa13d2152a4b39a79338e18'

# Function to check if the email already exists in the database
def check_email_exists(email):
    connection = mysql.connector.connect(host='localhost', port='3307',
                                         database='Podlogin',
                                         user='root',
                                         password='8520', auth_plugin='mysql_native_password')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM loginuser WHERE email = %s", (email,))
    result = cursor.fetchone()
    connection.close()
    return result is not None

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/index.html', methods=['POST'])
def submit_form():
    # Get the form data
    email = request.form['email']
    password = request.form['password']

    # Validate the form data
    if not email or not password:
        flash('Please fill in all fields.', 'error')
        return redirect(url_for('ind'))

    # Check if the email already exists
    if check_email_exists(email):
        flash('Email already exists. Please use a different email.', 'error')
        return redirect(url_for('index'))

    # Create a connection to the database and insert the data
    connection = mysql.connector.connect(host='localhost', port='3307',
                                         database='Podlogin',
                                         user='root',
                                         password='8520', auth_plugin='mysql_native_password')
    cursor = connection.cursor()
    cursor.execute("INSERT INTO loginuser (email, password) VALUES (%s, %s)", (email, password))
    connection.commit()
    connection.close()

    flash('Account created successfully!', 'success')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
