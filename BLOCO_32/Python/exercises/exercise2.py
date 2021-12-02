# Exercício 2 - Calcule a média aritmética dos valores contidos em uma lista.

numbers = [10 ,9 ,7, 2, 3, 9, 10, 8, 9]

def media(array):
  sum = 0
  qtd = len(array)  
  for arr in array:
    sum += arr
    
  return sum / qtd

print(media(numbers))