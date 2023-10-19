import random

# WORDS = [
#     "gato",
#     "elefante",
#     "cachorro",
#     "cavalo",
#     "girafa",
#     "macaco",
#     "papagaio",
#     "arara",
#     "tartaruga",
#     "camelo",
#     "tigre",
#     "leao",
#     "vaca",
#     "boi",
#     "pato",
#     "galinha",
#     "jacare",
#     "cobra",
#     "pomba",
#     "coelho",
#     "porco",
#     "ovelha",
#     "bode",
#     "sapo",
#     "rato",
#     "lagarto",
# ]


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def check_game_result(secret_word):
    MAX_ATTEMPTS = 3
    while MAX_ATTEMPTS > 0:
        guess = input("Guess the word: ")
        if guess == secret_word:
            print(f"You win: {secret_word}")
            return
        else:
            print("try again")
            MAX_ATTEMPTS -= 1

    if MAX_ATTEMPTS == 0:
        print(f"Your attempts are over. The correct word was: {secret_word}")


if __name__ == "__main__":
    with open("words.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    check_game_result(secret_word)
