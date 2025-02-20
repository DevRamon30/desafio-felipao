// Definindo os heróis e seus XP's
const herois = [
    {nome: 'Sova', xp: 950 },
    {nome: 'Raze', xp: 1500 },
    {nome: 'Cypher', xp: 3000 },
    {nome: 'Reyna', xp: 6000 },
    {nome: 'Brimstorm', xp: 7500 },
    {nome: 'Omen', xp: 8500 },
    {nome: 'Sage', xp: 9500 },
    {nome: 'Killjoy', xp: 11000 },

];

// Função para classificar os níveis dos heróis
function classificarNivel(xp) {
    if (xp < 1000) {
        return 'Ferro';
    } else if (xp <= 2000) {
        return 'Bronze';
    } else if (xp <= 5000) {
        return 'Prata';
    } else if (xp <= 7000) {
        return 'Ouro'
    } else if (xp <= 8000) {
        return 'Platina'
    } else if (xp <= 9000) {
        return 'Ascendente'
    } else if (xp <= 10000) {
        return 'Imortal'
    } else {
        return 'Radiante'
    }
}

// Exibindo a classificação dos heróis
for (let i = 0; i < herois.length; i++) {
    const nivel = classificarNivel(herois[i].xp);
    console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`);
}