# Algoritmo recursivo
# Retorna o maior número inteiro de uma lista
def maior_inteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maior_inteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maior_inteiro(lista):
    tamanho = len(lista)
    return maior_inteiro_aux(lista, tamanho)


print(maior_inteiro([1, 2, 3, 7]))
