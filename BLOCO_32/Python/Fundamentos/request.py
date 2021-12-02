import requests

Url = "https://viacep.com.br/ws/01001000/json/"

r = requests.get( Url )

data = r.json()

print(data)