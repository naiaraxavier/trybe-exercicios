# Qual a ordem de complexidade desse algoritmo?


def contains_duplicate(numbers):
    numbers.sort()  # O(n log n)
    previous_number = "not a number"
    for number in numbers:  # O(n)
        if previous_number == number:
            return True
        previous_number = number

    return False


# O(n log n) + O(n)
# ordem de complexidade de tempo = O(n log n)
# ordem de complexidade de espaço = O(1)
