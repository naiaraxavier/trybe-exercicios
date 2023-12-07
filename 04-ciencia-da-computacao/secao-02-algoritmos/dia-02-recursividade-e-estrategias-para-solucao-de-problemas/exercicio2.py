# Algoritmo recursivo
# Retorna o maior número par de uma lista
def count_numbers_pairs(number):
    if number == 1:
        return 0
    elif number % 2 == 0:
        return 1 + count_numbers_pairs(number - 1)
    else:
        return count_numbers_pairs(number - 1)


print(count_numbers_pairs(10))
