import os
import random
import string
from flask import Flask, render_template, request, redirect, url_for
from PIL import Image, ImageDraw, ImageFont

# create the Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # limit uploads to 16 MB

# define the view function for the card creator page
@app.route('/', methods=['GET', 'POST'])
def card_creator():
    if request.method == 'POST':
        # check that the user has uploaded a background image and a main art image
        if 'background' not in request.files or 'main_art' not in request.files:
            return render_template('card_creator.html', error_message='Please upload a background image and a main art image.')

        # get the uploaded files and check their file extensions
        background = request.files['background']
        main_art = request.files['main_art']
        if not background.filename.lower().endswith(('.png', '.jpg', '.jpeg')) or not main_art.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            return render_template('card_creator.html', error_message='Please upload image files with extensions .png, .jpg, or .jpeg.')

        # get the user input for the card name, attack, and defense stats
        card_name = request.form['card_name']
        attack = request.form['attack']
        defense = request.form['defense']

        # create a new card image using the uploaded background image and main art image
        background_img = Image.open(background)
        main_art_img = Image.open(main_art)
        card = Image.new('RGB', (750, 1050), (255, 255, 255))
        card.paste(background_img.resize((750, 1050)))
        main_art_img = main_art_img.resize((500, 700))
        card.paste(main_art_img, (125, 200))

        # add text to the card
        draw = ImageDraw.Draw(card)

        # set font styles and sizes
        name_font = ImageFont.truetype("static/fonts/Roboto-Bold.ttf", 48)
        stat_font = ImageFont.truetype("static/fonts/Roboto-Regular.ttf", 24)

        # add card name to the card
        draw.text((50, 100), card_name, fill=(0, 0, 0, 255), font=name_font)

        # add attack and defense stats to the card
        draw.text((300, 900), "ATK " + attack, fill=(0, 0, 0, 255), font=stat_font)
        draw.text((450, 900), "DEF " + defense, fill=(0, 0, 0, 255), font=stat_font)

        # save the card to a file
        card_filename = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(16)) + '.png'
        card.save(os.path.join(app.config['UPLOAD_FOLDER'], card_filename))

        # redirect to the card view page
        return redirect(url_for('card_view', card_filename=card_filename))

    return render_template('card_creator.html')


# define the view function for the card view page
@app.route('/card/<card_filename>')
def card_view(card_filename):
    return render_template('card_view.html', card_filename=card_filename)


# run the app
if __name__ == '__main__':
    app.run(debug=True)
