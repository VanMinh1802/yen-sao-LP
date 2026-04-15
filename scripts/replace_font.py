import os

filepath = "mockup.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace google fonts link
content = content.replace(
    "family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700",
    "family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600"
)

# Replace CSS variables
content = content.replace("'Playfair Display', Georgia, serif", "'Montserrat', sans-serif")
content = content.replace("'Inter', -apple-system, sans-serif", "'Montserrat', sans-serif")

# Replace any hardcoded fallbacks I added in hero-new
content = content.replace("'Playfair Display', serif", "'Montserrat', sans-serif")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Font replaced successfully.")
