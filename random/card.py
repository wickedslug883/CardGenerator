# from PIL import Image, ImageDraw, ImageFont

# # Set the dimensions of the card
# CARD_WIDTH = 750
# CARD_HEIGHT = 1050

# # Set the size of the black border
# BORDER_SIZE = 10

# # Set the font for the card text
# FONT_SIZE = 32
# FONT_FILE = 'arial.ttf'
# FONT = ImageFont.truetype(FONT_FILE, FONT_SIZE)

# # Set the name of the output file
# OUTPUT_FILE = 'magic_card.png'

# # Open the main art image file
# main_art_file = input("Enter the path to the main art image file: ")
# main_art_image = Image.open(main_art_file)
# main_art_width, main_art_height = main_art_image.size

# # Open the background image file
# background_file = input("Enter the path to the background image file: ")
# background_image = Image.open(background_file)
# background_image = background_image.resize((CARD_WIDTH, CARD_HEIGHT))

# # Create a new blank image for the card
# card_image = Image.new('RGB', (CARD_WIDTH, CARD_HEIGHT), color='white')

# # Add the background to the card
# card_image.paste(background_image, (0, 0))

# # Add the main art to the card
# main_art_x = (CARD_WIDTH - main_art_width) // 2
# main_art_y = BORDER_SIZE
# card_image.paste(main_art_image, (main_art_x, main_art_y))

# # Add the card text to the card
# card_text = input("Enter the text for the card: ")
# card_text_x = BORDER_SIZE
# card_text_y = main_art_y + main_art_height + BORDER_SIZE
# draw = ImageDraw.Draw(card_image)
# draw.text((card_text_x, card_text_y), card_text, font=FONT, fill='black')

# # Add the black border to the card
# for x in range(BORDER_SIZE):
#     for y in range(CARD_HEIGHT):
#         card_image.putpixel((x, y), (0, 0, 0))
#         card_image.putpixel((CARD_WIDTH - 1 - x, y), (0, 0, 0))
#     for y in range(BORDER_SIZE, CARD_HEIGHT - BORDER_SIZE):
#         card_image.putpixel((x, y), (0, 0, 0))
#         card_image.putpixel((CARD_WIDTH - 1 - x, y), (0, 0, 0))
#     for y in range(CARD_HEIGHT - BORDER_SIZE, CARD_HEIGHT):
#         card_image.putpixel((x, y), (0, 0, 0))
#         card_image.putpixel((CARD_WIDTH - 1 - x, y), (0, 0, 0))

# # Save the card image
# card_image.save(OUTPUT_FILE)
