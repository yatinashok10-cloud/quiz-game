# Computer Quiz 💻

A quiz game with 56 questions on computers, physics, chemistry, biology, maths, geography, history, English and general knowledge. It started as a terminal game in Python, and I then made a web version you can play in the browser.

![screenshot of the quiz](screenshots/start.png<img width="1907" height="1080" alt="Screenshot 2026-11-07 093133" src="https://github.com/user-attachments/assets/8f371b09-5e8a-4a23-9135-620813d3f44f" />
)


**Try it online:** [https://quizformiddlegraders.netlify.app/]

## What it does

- Picks 10 random questions each round (you can change the number)
- 4 multiple-choice options per question, shuffled every time
- Live score and a progress bar
- Shows the right answer when you get one wrong
- Confetti for a perfect score 🎉
- The Python version also has coloured text, typing effects, a streak counter, and a score breakdown by subject

## Why I made it

because i like games and wanted to increase sharpness of my general knowledge

## How it was made

**Terminal version:** written in plain Python with no extra libraries (just `random`, `time`, `sys`, `os`). Questions are stored as tuples in a list, so adding one means copying a line and changing the text. It uses ANSI colour codes, which is why it checks `sys.stdout.isatty()` first, so colours don't break in IDLE or the VS Code Output tab.

**Web version:** HTML, CSS and vanilla JavaScript, with no frameworks. It uses the same question list as the Python version.


## Tech stack

- Python 3 (terminal version)
- HTML, CSS, JavaScript (web version)

## How to run it
there is no need to run because it is completely ran on a webpage all you need is a good internet connection

### Terminal version

1. Clone the repo
2. Run the quiz (needs Python 3, no installs required)
```sh
python quiz.py
```
Run it in a real terminal. In VS Code, use Terminal > New Terminal.

### Web version

1. Clone the repo

2. Open `index.html` in your browser. That's it, nothing to install.

If you'd rather use a local server:
```sh
python -m http.server 8000
```
Then go to `localhost:8000`.

## Adding your own questions

Each question is one line in the `QUESTIONS` list (Python) or `Q` list (`script.js`):

```
("Subject", "Question?", "Correct answer", ["Wrong 1", "Wrong 2", "Wrong 3"])
```

Copy a line, change the text, and save. The totals and percentages update on their own.

To change how many questions each round has, edit `HOW_MANY` in `script.js`.


Made by Yatin
