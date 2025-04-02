from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Email sending function
def send_email(to_email, user_name):
    from_email = "your_email@example.com"
    from_password = "your_password"

    # Email content
    subject = "Successfully Registered!"
    body = f"Dear {user_name},\n\nYou have successfully registered!\n\nBest regards,\nWaste to Wonder Team"

    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(from_email, from_password)
        server.sendmail(from_email, to_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

# Route to handle registration form submission
@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')

    # Send email
    if send_email(email, name):
        return "Successfully registered!", 200
    else:
        return "Failed to send email.", 500

if __name__ == '__main__':
    app.run(debug=True)
