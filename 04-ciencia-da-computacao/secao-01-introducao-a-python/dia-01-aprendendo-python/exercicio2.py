# calcula a média de uma lista de números


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)
