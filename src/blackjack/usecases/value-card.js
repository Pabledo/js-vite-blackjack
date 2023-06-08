/**
 * Esta función le da valor cuantitativo a la carta extraída
 * @param {String} carta Ejemplo: '6D'
 * @returns {Number} Valor numérico de la carta
 */
export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('carta es obligatorio');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}