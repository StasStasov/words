/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random value
 */
export function range(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
/**
 * 
 * @param {Array} arr 
 * @returns {number} random index
 */
export function rand(arr) {
  return Math.floor(Math.random() * arr.length)
}
/**
 * 
 * @param {Array} array 
 * @returns {Array} shuffled array
 */
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
