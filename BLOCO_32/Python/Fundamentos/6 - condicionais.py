# condicionais

def pos(salary):
  position = ""
  if salary <= 2000:
      position = "Estagiário"
  elif 2000 < salary <= 5800:
      position = "Júnior"
  elif 5800 < salary <= 7500:
      position = "Pleno"
  elif 7500 < salary <= 10500:
      position = "Senior"
  else:
      position = "CTO"
  return position      
      
print(pos(5000))
