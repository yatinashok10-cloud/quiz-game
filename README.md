# Computer Quiz

A quiz game with 56 questions on computers, physics, chemistry, biology, maths, geography, history, English and general knowledge. I first made it as a terminal game in Python, then built a web version so people can play it in the browser.

<img width="1920" height="999" alt="Screenshot 2026-11-07 200845" src="https://github.com/user-attachments/assets/8f1b31ef-eb9b-4ec0-920c-c3a42c5f291f" />


Play it here: https://quizformiddlegraders.netlify.app/

## What it does

- Picks 10 random questions each round (you can change the number)
- Gives 4 multiple-choice options per question, shuffled every time
- Shows a live score and a progress bar
- Tells you the right answer when you get one wrong
- Shows confetti if you get a perfect score
- The Python version also has coloured text, typing effects, a streak counter and a score breakdown by subject

## Why I made it

I like games, and I wanted to sharpen my general knowledge. A quiz seemed like a good way to do both. [Add one sentence about who you made it for, or what the hardest question to write was.]

## How I made it

**Terminal version:** plain Python with no extra libraries, just `random`, `time`, `sys` and `os`. The questions are tuples in a list, so adding one means copying a line and changing the text. The colours use ANSI codes, so the program checks `sys.stdout.isatty()` first. Without that check the colours show up as junk characters in IDLE and in the VS Code Output tab. [If you remember how you found that bug, say so here.]

**Web version:** HTML, CSS and vanilla JavaScript, no frameworks. It uses the same questions as the Python version.

## Running it

The easiest way is to play it online at the link above. You only need an internet connection. If you want to run it on your own computer, here's how.

### Terminal version

1. Clone the repo.
2. Run the quiz. You need Python 3 and nothing else.

```sh
python quiz.py
```

Use a real terminal. In VS Code, go to Terminal > New Terminal.

### Web version

1. Clone the repo.
2. Open `index.html` in your browser. There's nothing to install.

If you'd rather use a local server:

```sh
python -m http.server 8000
```

Then go to `localhost:8000`.

## Adding your own questions

Each question is one line in the `QUESTIONS` list (Python) or the `Q` list (`script.js`):

```
("Subject", "Question?", "Correct answer", ["Wrong 1", "Wrong 2", "Wrong 3"])
```

Copy a line, change the text and save. The totals and percentages update on their own.

To change how many questions you get per round, edit `HOW_MANY` in `script.js`.

## Things I want to improve

[Add one or two real ones, like "more questions," "a timer," or "a high score that saves."]

Made by Yatin
