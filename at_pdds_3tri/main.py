import random

num = random.randint(1, 100)
tentativas = 0

while tentativas <= 10:
    if 10 - tentativas == 0:
        print("Você não conseguiu acertar o numero")
        break

    input_usr = input(f"Adivinhe o número 1-100 (Você tem {10 - tentativas} tentativas restantes) > ")

    if int(input_usr) > num:
        print("O número é maior! Tente novamente")
        tentativas += 1

    elif int(input_usr) < num:
        print("O número é menor! Tente novamente")
        tentativas += 1

    else:
        print("Você acertou o número!")
        tentativas = 10