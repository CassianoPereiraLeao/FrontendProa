from random import choice

run = True
while run:
    jogador = str(input("Pedra, papel ou tesoura: ")).lower()
    machine = choice(["pedra", "papel", "tesoura"])

    print(f"A maquina escolheu: {machine}")

    if (jogador == "pedra" and machine == "papel") or (jogador == "papel" and machine == "tesoura") or (jogador == "tesoura" and machine == "pedra"):
        print("Perdeu ruim")
    elif (jogador == "pedra" and machine == "pedra") or (jogador == "papel" and machine == "papel") or (jogador == "tesoura" and machine == "tesoura"):
        print("Empataram")
    elif (jogador == "pedra" and machine == "tesoura") or (jogador == "papel" and machine == "pedra") or (jogador == "tesoura" and machine == "papel"):
        print("Ganhou")
    else:
        print("Você escreveu como se fosse um animal, escreve melhor pfv")

    continuar = str(input("Quer continuar? [S/N] \n> ")).upper()
    if continuar == "S":
        continue
    elif continuar == "N":
        break