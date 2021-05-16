export const getStorage = (name, defaultValue) => {
  return JSON.parse(localStorage.getItem(name)) ?? defaultValue
}
export const setStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}
