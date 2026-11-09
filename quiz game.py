"""Computer Quiz: a terminal multiple-choice quiz.

Run with:  python quiz_game.py
"""

import os
import random
import sys
import time


if os.name == "nt":
    os.system("")

if sys.stdout.isatty():
    GREEN, RED, YELLOW = "\033[92m", "\033[91m", "\033[93m"
    CYAN, MAGENTA, BOLD, RESET = "\033[96m", "\033[95m", "\033[1m", "\033[0m"
else:
    GREEN = RED = YELLOW = CYAN = MAGENTA = BOLD = RESET = ""

QUESTIONS = [
    ("Computers", "What does RAM stand for?", "Random Access Memory", ["Read Access Memory", "Rapid Access Memory", "Run Access Memory"]),
    ("Computers", "What does ROM stand for?", "Read Only Memory", ["Random Only Memory", "Read Output Memory", "Run Only Memory"]),
    ("Computers", "What does PSU stand for?", "Power Supply Unit", ["Power Storage Unit", "Primary Supply Unit", "Processor Supply Unit"]),
    ("Computers", "What does CPU stand for?", "Central Processing Unit", ["Central Program Unit", "Computer Processing Unit", "Control Power Unit"]),
    ("Computers", "What does GPU stand for?", "Graphics Processing Unit", ["General Processing Unit", "Graphical Power Unit", "Graphics Program Unit"]),
    ("Computers", "Which number system do computers use internally?", "Binary", ["Decimal", "Octal", "Hexadecimal"]),
    ("Computers", "What does HTML stand for?", "HyperText Markup Language", ["HighText Machine Language", "HyperTool Multi Language", "Hyperlinks and Text Markup Language"]),
    ("Computers", "Which of these is an output device?", "Monitor", ["Keyboard", "Mouse", "Scanner"]),
    ("Computers", "Who is known as the father of the computer?", "Charles Babbage", ["Bill Gates", "Steve Jobs", "Tim Berners-Lee"]),
    ("Computers", "How many bits are in one byte?", "8", ["4", "16", "10"]),

    ("Physics", "What is the SI unit of force?", "Newton", ["Joule", "Watt", "Pascal"]),
    ("Physics", "What is the approximate speed of light?", "3 x 10^8 m/s", ["3 x 10^6 m/s", "3 x 10^10 m/s", "3 x 10^4 m/s"]),
    ("Physics", "What is the approximate acceleration due to gravity on Earth?", "9.8 m/s^2", ["1.6 m/s^2", "3.7 m/s^2", "98 m/s^2"]),
    ("Physics", "Who proposed the three laws of motion?", "Isaac Newton", ["Albert Einstein", "Galileo Galilei", "Michael Faraday"]),
    ("Physics", "What is the SI unit of electric current?", "Ampere", ["Volt", "Ohm", "Coulomb"]),
    ("Physics", "Which law is written as V = IR?", "Ohm's law", ["Newton's law", "Faraday's law", "Boyle's law"]),

    ("Chemistry", "What is the chemical symbol for gold?", "Au", ["Ag", "Gd", "Go"]),
    ("Chemistry", "What is the atomic number of carbon?", "6", ["12", "8", "4"]),
    ("Chemistry", "What is the pH of pure water at 25 degrees C?", "7", ["0", "14", "10"]),
    ("Chemistry", "Which gas is the most abundant in Earth's atmosphere?", "Nitrogen", ["Oxygen", "Carbon dioxide", "Argon"]),
    ("Chemistry", "What is the chemical formula of table salt?", "NaCl", ["KCl", "NaOH", "CaCl2"]),
    ("Chemistry", "Who is credited with creating the periodic table?", "Dmitri Mendeleev", ["John Dalton", "Niels Bohr", "Antoine Lavoisier"]),

    ("Biology", "Which part of the cell is called the powerhouse of the cell?", "Mitochondria", ["Nucleus", "Ribosome", "Golgi apparatus"]),
    ("Biology", "Which blood group is the universal donor?", "O negative", ["AB positive", "A positive", "B negative"]),
    ("Biology", "What is the process by which plants make their food?", "Photosynthesis", ["Respiration", "Transpiration", "Digestion"]),
    ("Biology", "How many chambers does the human heart have?", "4", ["2", "3", "5"]),
    ("Biology", "Which vitamin does the skin make from sunlight?", "Vitamin D", ["Vitamin A", "Vitamin C", "Vitamin K"]),
    ("Biology", "What does DNA stand for?", "Deoxyribonucleic acid", ["Dioxyribonucleic acid", "Deoxyribonitric acid", "Diribonucleic acid"]),

    ("Maths", "What is the approximate value of pi?", "3.14", ["2.71", "1.62", "3.41"]),
    ("Maths", "What is the square root of 144?", "12", ["14", "16", "11"]),
    ("Maths", "What is the sum of the angles in a triangle?", "180 degrees", ["90 degrees", "270 degrees", "360 degrees"]),
    ("Maths", "What is the derivative of sin x?", "cos x", ["-cos x", "-sin x", "tan x"]),
    ("Maths", "What is 15% of 200?", "30", ["15", "20", "45"]),
    ("Maths", "What is the smallest prime number?", "2", ["0", "1", "3"]),
    ("Maths", "What is the value of log base 10 of 1000?", "3", ["2", "10", "1000"]),
    ("Maths", "What is the area of a circle with radius r?", "pi * r^2", ["2 * pi * r", "pi * r", "2 * pi * r^2"]),

    ("Geography", "What is the capital of Australia?", "Canberra", ["Sydney", "Melbourne", "Perth"]),
    ("Geography", "Which is the largest ocean on Earth?", "Pacific Ocean", ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]),
    ("Geography", "Which is the highest mountain peak in the world?", "Mount Everest", ["K2", "Kangchenjunga", "Makalu"]),
    ("Geography", "On which continent is the Sahara Desert?", "Africa", ["Asia", "Australia", "South America"]),
    ("Geography", "Which is the largest state in India by area?", "Rajasthan", ["Madhya Pradesh", "Maharashtra", "Uttar Pradesh"]),
    ("Geography", "Which imaginary line divides Earth into the Northern and Southern Hemispheres?", "Equator", ["Prime Meridian", "Tropic of Cancer", "International Date Line"]),

    ("History", "Who was the first Prime Minister of India?", "Jawaharlal Nehru", ["Mahatma Gandhi", "Sardar Patel", "B. R. Ambedkar"]),
    ("History", "In which year did India gain independence?", "1947", ["1942", "1950", "1935"]),
    ("History", "Who wrote the Indian national anthem?", "Rabindranath Tagore", ["Bankim Chandra Chatterjee", "Sarojini Naidu", "Muhammad Iqbal"]),
    ("History", "On which date did the Indian Constitution come into effect?", "26 January 1950", ["15 August 1947", "26 November 1949", "2 October 1950"]),
    ("History", "Who is known as the Father of the Indian Constitution?", "B. R. Ambedkar", ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel"]),
    ("History", "Who was the first President of India?", "Dr. Rajendra Prasad", ["Dr. S. Radhakrishnan", "Dr. Zakir Husain", "Jawaharlal Nehru"]),

    ("English", "Which word is a synonym of 'happy'?", "Joyful", ["Gloomy", "Angry", "Tired"]),
    ("English", "What is the plural of 'child'?", "Children", ["Childs", "Childes", "Childrens"]),
    ("English", "Who wrote 'Romeo and Juliet'?", "William Shakespeare", ["Charles Dickens", "Jane Austen", "Mark Twain"]),
    ("English", "Which of these words is an adjective?", "Beautiful", ["Quickly", "Run", "Table"]),

    ("General Knowledge", "Which planet is known as the Red Planet?", "Mars", ["Venus", "Jupiter", "Saturn"]),
    ("General Knowledge", "Which is the largest planet in our solar system?", "Jupiter", ["Saturn", "Neptune", "Earth"]),
    ("General Knowledge", "How many continents are there?", "7", ["5", "6", "8"]),
    ("General Knowledge", "What is the national animal of India?", "Tiger", ["Lion", "Elephant", "Leopard"]),
    ("General Knowledge", "Who is known as the Missile Man of India?", "A. P. J. Abdul Kalam", ["Vikram Sarabhai", "Homi Bhabha", "C. V. Raman"]),
    ("General Knowledge", "Which country hosted the 2024 Summer Olympics?", "France", ["Japan", "USA", "Brazil"]),
    ("General Knowledge", "What is the currency of Japan?", "Yen", ["Won", "Yuan", "Dollar"]),
    ("General Knowledge", "Which organisation launched Chandrayaan-3?", "ISRO", ["NASA", "DRDO", "ESA"]),
]



def wrong_nums(correct, fmt=str):
    """Three different wrong numbers close to the right one."""
    offsets = [1, -1, 2, -2, 10, -10, 3, -3, 5, -5]
    random.shuffle(offsets)
    out = []
    for offset in offsets:
        value = correct + offset
        if value > 0 and len(out) < 3:
            out.append(fmt(value))
    return out


def num_q(subject, text, correct, fmt=str):
    return (subject, text, fmt(correct), wrong_nums(correct, fmt))


def to_bin(n):
    return format(n, "b")


def to_hex(n):
    return format(n, "X")


def gen_add():
    a, b = random.randint(10, 99), random.randint(10, 99)
    return num_q("Maths", "What is " + str(a) + " + " + str(b) + "?", a + b)


def gen_sub():
    a = random.randint(20, 99)
    b = random.randint(1, a - 1)
    return num_q("Maths", "What is " + str(a) + " - " + str(b) + "?", a - b)


def gen_mul():
    a, b = random.randint(2, 15), random.randint(2, 12)
    return num_q("Maths", "What is " + str(a) + " x " + str(b) + "?", a * b)


def gen_percent():
    p = random.choice([5, 10, 15, 20, 25, 30, 50])
    n = random.randint(1, 20) * 20
    return num_q("Maths", "What is " + str(p) + "% of " + str(n) + "?", p * n // 100)


def gen_square():
    a = random.randint(2, 20)
    return num_q("Maths", "What is " + str(a) + " squared?", a * a)


def gen_root():
    a = random.randint(2, 20)
    return num_q("Maths", "What is the square root of " + str(a * a) + "?", a)


def gen_solve():
    x, a, b = random.randint(2, 12), random.randint(2, 9), random.randint(1, 20)
    text = "If " + str(a) + "x + " + str(b) + " = " + str(a * x + b) + ", what is x?"
    return num_q("Maths", text, x)


def gen_to_binary():
    n = random.randint(1, 63)
    return num_q("Computers", "What is the decimal number " + str(n) + " in binary?", n, to_bin)


def gen_from_binary():
    n = random.randint(1, 63)
    return num_q("Computers", "What is the binary number " + to_bin(n) + " in decimal?", n)


def gen_to_hex():
    n = random.randint(10, 255)
    return num_q("Computers", "What is the decimal number " + str(n) + " in hexadecimal?", n, to_hex)


def gen_bytes():
    n = random.randint(2, 16)
    return num_q("Computers", "How many bits are in " + str(n) + " bytes?", n * 8)


MATHS_GENS = [gen_add, gen_sub, gen_mul, gen_percent, gen_square, gen_root, gen_solve]
COMP_GENS = [gen_to_binary, gen_from_binary, gen_to_hex, gen_bytes]


def endless_stream(pool, subject):
    """Never runs out: mixes stored questions with generated ones."""
    if subject is None:
        gens = MATHS_GENS + COMP_GENS
    elif subject == "Maths":
        gens = MATHS_GENS
    elif subject == "Computers":
        gens = COMP_GENS
    else:
        gens = []

    bank = []
    seen = set()
    while True:
        if gens and random.random() < 0.5:
            for _ in range(15):
                q = random.choice(gens)()
                if q[1] not in seen:
                    break
            seen.add(q[1])
            yield q
        else:
            if not bank:
                bank = random.sample(pool, len(pool))
            yield bank.pop()




def type_out(text, color="", delay=0.03):
    """Prints text one letter at a time."""
    sys.stdout.write(color)
    for ch in text:
        sys.stdout.write(ch)
        sys.stdout.flush()
        time.sleep(delay)
    sys.stdout.write(RESET + "\n")


def loading(text="Loading questions"):
    sys.stdout.write(YELLOW + text)
    for _ in range(3):
        time.sleep(0.4)
        sys.stdout.write(".")
        sys.stdout.flush()
    print(RESET)


def progress_bar(done, total, width=20):
    filled = int(width * done / total)
    return "[" + "#" * filled + "-" * (width - filled) + "] " + str(done) + "/" + str(total)


def show_title():
    lines = [
        "  +----------------------------------+",
        "  |                                  |",
        "  |           COMPUTER QUIZ          |",
        "  |  computers, science, maths, GK   |",
        "  |                                  |",
        "  +----------------------------------+",
    ]
    print()
    for line in lines:
        print(CYAN + BOLD + line + RESET)
        time.sleep(0.12)
    print("  " + "Created by Yatin")
    print()




def ask_yes_no(prompt):
    while True:
        answer = input(prompt + " (yes/no): ").strip().lower()
        if answer in ("yes", "y"):
            return True
        if answer in ("no", "n"):
            return False
        print(RED + "Please type yes or no." + RESET)


def ask_subject():
    """Returns a subject name, or None for all subjects."""
    subjects = sorted({q[0] for q in QUESTIONS})
    print("Subjects:")
    print("  0) All subjects")
    for n, name in enumerate(subjects, start=1):
        print("  " + str(n) + ") " + name)
    while True:
        raw = input("Pick a subject (press Enter for all): ").strip()
        if raw == "" or raw == "0":
            return None
        if raw.isdigit() and 1 <= int(raw) <= len(subjects):
            return subjects[int(raw) - 1]
        print(RED + "Please type a number from the list." + RESET)


def ask_how_many(biggest):
    """Returns how many questions to ask, or None for endless mode."""
    while True:
        raw = input("How many questions? (1-" + str(biggest) + ", type e for endless, press Enter for 10): ").strip().lower()
        if raw in ("e", "endless"):
            return None
        if raw == "":
            return min(10, biggest)
        if raw.isdigit() and 1 <= int(raw) <= biggest:
            return int(raw)
        print(RED + "Please type a number between 1 and " + str(biggest) + ", or e for endless." + RESET)



def ask(question, number, total):
    """Asks one question and returns True if the answer is right."""
    subject, text, correct, wrong = question
    options = wrong + [correct]
    random.shuffle(options)
    letters = "abcd"

    print()
    if total is not None:
        print(MAGENTA + progress_bar(number - 1, total) + RESET)
    print(BOLD + "Question " + str(number) + " (" + subject + ")" + RESET)
    type_out(text, BOLD, 0.02)
    for letter, option in zip(letters, options):
        print("  " + letter + ") " + option)

    while True:
        choice = input("Your answer (a/b/c/d): ").strip().lower()
        if choice in letters:
            break
        print(RED + "Please type a, b, c or d." + RESET)

    return options[letters.index(choice)] == correct


def play():
    subject = ask_subject()
    pool = QUESTIONS if subject is None else [q for q in QUESTIONS if q[0] == subject]
    total = ask_how_many(len(pool))
    endless = total is None

    if endless:
        questions = endless_stream(pool, subject)
    else:
        questions = random.sample(pool, total)

    score = 0
    streak = 0
    number = 0
    by_subject = {}

    loading()

    for q in questions:
        number += 1
        right = ask(q, number, total)

        got, out_of = by_subject.get(q[0], (0, 0))
        by_subject[q[0]] = (got + int(right), out_of + 1)

        if right:
            score += 1
            streak += 1
            print(GREEN + "correct!" + RESET)
            if streak >= 3:
                print(YELLOW + str(streak) + " in a row, keep going!" + RESET)
        else:
            streak = 0
            print(RED + "incorrect! the answer is " + q[2] + RESET)
        time.sleep(0.6)

        if endless:
            more = input("Press Enter for the next question, or type q to finish: ").strip().lower()
            if more in ("q", "quit"):
                break

    answered = number

    print()
    print(CYAN + BOLD + "=== RESULTS ===" + RESET)
    for k in range(score + 1):
        sys.stdout.write("\r" + GREEN + progress_bar(k, answered) + RESET)
        sys.stdout.flush()
        time.sleep(0.08)
    print("\n")

    percent = round(score / answered * 100, 1)
    print("you got " + str(score) + " questions correct!")
    print("you got " + str(percent) + "%.")

    if percent >= 90:
        print(GREEN + BOLD + "Outstanding!" + RESET)
    elif percent >= 60:
        print(YELLOW + BOLD + "Nice work!" + RESET)
    else:
        print(RED + BOLD + "Keep practising!" + RESET)

    print()
    print("Score by subject:")
    for name, (got, out_of) in by_subject.items():
        print("  " + name.ljust(20) + str(got) + "/" + str(out_of))
    print()


def main():
    show_title()
    type_out("Welcome to the quiz! Are you ready to test your brain?", CYAN)
    wants_to_play = ask_yes_no("Would you like to play?")

    while wants_to_play:
        play()
        wants_to_play = ask_yes_no("Would you like to play again?")

    print()
    type_out("Thanks for playing! See you next time.", GREEN)
    print(BOLD + "Created by Yatin" + RESET)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(RESET + "\nBye! Created by Yatin")
    except EOFError:
        print("\nThis quiz needs a terminal where you can type your answers.")
        print("In VS Code: Terminal > New Terminal, then run:  python quiz_game.py")