# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
#🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

list_of_names = ["Fernanda", "Lucas", "Nádia", "José", "Cairo", "Joana"]

def biggestName (array):
  word = array[0]
  for a in array:
    if len(a) < len(word):
      word = a
  return word

print(biggestName(list_of_names))