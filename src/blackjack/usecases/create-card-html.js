/**
 * 
 * @param {String} card
 * @returns {HTMLImageElement} imagen de retorno
 */
export const createCardHTML = (card) => {

    if(!card) throw new Error('carta es obligatoria')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}