from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename
import os
from moviepy.editor import VideoFileClip
import speech_recognition as sr
import shutil
import zipfile
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo

# Load environment variables from .env file
load_dotenv()

# Access the MONGO_URL environment variable
mongo_url = os.getenv("MONGO_URL")

app = Flask(__name__, static_folder='templates/build/static', template_folder='templates/build')
bcrypt = Bcrypt(app)
app.config["MONGO_URI"]=mongo_url

mongo = PyMongo(app).db

UPLOAD_FOLDER = 'uploads'
DOWNLOAD_FOLDER = 'downloads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)


@app.route('/')
@app.route('/login')
@app.route('/signup')
@app.route('/upload')
@app.route('/welcome')
def serve():
    return render_template('index.html')


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        print("running")
        print(request.method)
        # Check if the POST request has a file part
        if 'file' not in request.files:
            return redirect(request.url)

        file = request.files['file']

        # If the user does not select a file, the browser submits an empty part without a filename
        if file.filename == '':
            return redirect(request.url)

        # Save the file to the upload directory
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Call the convert function to convert video to audio
        audio_path = convert_video_to_audio(file_path)

        # Call the extract_captions function to get captions from the audio
        captions_file_path = extract_captions(audio_path)
        print(captions_file_path)

        # Create a folder to store the audio and text files
        folder_name = f"{filename.split('.')[0]}"
        folder_path = os.path.join(app.config['DOWNLOAD_FOLDER'], folder_name)
        os.makedirs(folder_path, exist_ok=True)

        # Move the audio file to the folder
        audio_filename = f"{filename.split('.')[0]}.wav"
        audio_file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], audio_filename)
        shutil.move(audio_path, os.path.join(folder_path, audio_filename))

        # Move the captions file to the folder
        captions_filename = f"{filename.split('.')[0]}.txt"
        captions_file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], captions_filename)
        shutil.move(captions_file_path, os.path.join(folder_path, captions_filename))

        # Create a ZIP file containing the folder
        zip_filename = f"{folder_name}.zip"
        zip_file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], zip_filename)
        with zipfile.ZipFile(zip_file_path, 'w') as zip_file:
            for root, _, files in os.walk(folder_path):
                for file in files:
                    file_path = os.path.join(root, file)
                    zip_file.write(file_path, os.path.relpath(file_path, folder_path))

        # Redirect to the download page with the ZIP file name
        return redirect(url_for('download', filename=zip_filename))

    return render_template('index.html')


def convert_video_to_audio(video_path):
    audio_filename = os.path.basename(video_path).replace('.mp4', '.wav')
    audio_path = os.path.join(app.config['DOWNLOAD_FOLDER'], audio_filename)
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(audio_path, fps=44100)  # Set the desired audio quality
    return audio_path


def extract_captions(audio_path):
    r = sr.Recognizer()
    captions = ""

    with sr.AudioFile(audio_path) as source:
        audio = r.record(source)
        captions = r.recognize_google(audio)

    captions_filename = os.path.basename(audio_path).replace('.wav', '.txt')
    captions_file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], captions_filename)
    with open(captions_file_path, 'w') as captions_file:
        captions_file.write(captions)

    return captions_file_path


@app.route('/downloads/<filename>', methods=['GET'])
def download(filename):
    # Get the file path of the downloadable file
    file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], filename)

    # Send the file as a response to download
    return send_file(file_path, as_attachment=True)


@app.route('/login', methods=['GET','POST'])
def login():
    name1 = request.form['username']
    pwd = request.form['password']
    result = mongo.db.users.find_one({"user":name1})

    if result:
        if bcrypt.check_password_hash(result["password"],pwd):
            return redirect(url_for('serve'))   
        else:
            return redirect(url_for('login'))   
    else:
        return redirect(url_for('login'))


@app.route('/signup', methods=['GET','POST'])
def signup():
    name1 = request.form['username']
    pwd = request.form['password']
    result = mongo.db.users.find_one({"user":name1})
    print(name1, pwd)
    if result:
        return redirect(url_for('signup'))

    else:
        hashed_password = bcrypt.generate_password_hash(pwd)
        mongo.db.users.insert_one({"user":name1,"password":hashed_password})
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)