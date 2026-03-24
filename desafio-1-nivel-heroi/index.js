const heroes = [
  { nome: 'Aline', xp: 800 },
  { nome: 'Barbara', xp: 1100 },
  { nome: 'Carlos', xp: 2300 },
  { nome: 'Daniel', xp: 6000 },
  { nome: 'Elvis', xp: 7500 },
  { nome: 'Felipe', xp: 8999 },
  { nome: 'Gertrudes', xp: 9700 },
  { nome: 'Helena', xp: 10000 },
  { nome: 'Isabel', xp: 200 },
  { nome: 'João', xp: 12000 }
];

for (const heroi of heroes) {
  let nivel;

  switch (true) {
    case heroi.xp < 1000:
      nivel = 'Ferro';
      break;
    case heroi.xp <= 2000:
      nivel = 'Bronze';
      break;
    case heroi.xp <= 5000:
      nivel = 'Prata';
      break;
    case heroi.xp <= 7000:
      nivel = 'Ouro';
      break;
    case heroi.xp <= 8000:
      nivel = 'Platina';
      break;
    case heroi.xp <= 9000:
      nivel = 'Ascendente';
      break;
    case heroi.xp <= 10000:
      nivel = 'Imortal';
      break;
    default:
      nivel = 'Radiante';
      break;
  }

  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
