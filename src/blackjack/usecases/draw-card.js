/**
 * Esta función le entrega una carta al jugador/computadora
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna una carta
 */
export const pedirCarta = (deck) => {

    if( !deck ) throw new Error('el deck es obligatorio como un arreglo de string');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}