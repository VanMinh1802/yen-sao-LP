import os

filepath = "mockup.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace google fonts link
content = content.replace(
    "family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600",
    "family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600"
)

# Replace CSS variables and hardcoded fonts
content = content.replace("'Montserrat'", "'Be Vietnam Pro'")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Font replaced with Be Vietnam Pro successfully.")
