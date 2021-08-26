const phrase = "While Bulbasaur might not be the most beautiful Pokemon, it's the greatest Pokemon for beginning players. Why? It has immunity against poison status, it is solid in the gyms, and its attacks are consistent. Bulbasaur is great to help ease new players into the game, meanwhile Bulbasaur evolves more quickly and it is one of the easiest Pokemon to care for. Also in RBY Razor Leaf crits each time that a Venusaur uses it.";

const countChars = (string) => {
  const result = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    y: 0,
    z: 0
  }
  for(let i = 0; i < string.length; i += 1) {
    // 'qualquercoisa'. 97 122  65 90
    if(/[a-zA-Z]/.test(string[i])) {
      result[string[i].toLowerCase()] += 1
    }
  }
  return result
};

console.log(countChars(phrase));

const result = {
  a: 32,
  b: 10,
  c: 6,
  d: 3,
  e: 38,
  f: 5,
  g: 8,
  h: 13,
  i: 28,
  k: 5,
  l: 14,
  m: 12,
  n: 21,
  o: 23,
  p: 7,
  q: 1,
  r: 17,
  s: 31,
  t: 34,
  u: 14,
  v: 3,
  w: 4,
  y: 7,
  z: 1
};
