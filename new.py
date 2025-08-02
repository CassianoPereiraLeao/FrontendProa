run = True
users = []

while run:
    name = str(input("Qual o seu nome: "))
    age = int(input("Qual a sua idade: "))
    gender = str(input("Qual o seu gênero: "))

    user = {
        "name": name,
        "age": age,
        "gender": gender
    }

    users.append(user);

    continuar = str(input("Deseja continuar [S/N]: ")).lower()
    if continuar == "s":
        continue
    elif continuar == "n":
        print(users)
        run = False
