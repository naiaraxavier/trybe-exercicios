# Algoritmo recursivo
# Retorna o máximo divisor comum de 2 números
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(3, 6))
