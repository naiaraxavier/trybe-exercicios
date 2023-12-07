# Algoritmo iterativo
# Retorna o maior número par de uma lista
def count_numbers_pairs(numbers):
    pairs = 0
    for number in range(numbers + 1):
        if number % 2 == 0 and number != 0:
            pairs += 1
    return pairs


print(count_numbers_pairs(10))
