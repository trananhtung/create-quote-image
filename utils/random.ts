import colors, { Color } from "../constants/color"

export function getRandomFromList<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}

export function getRandomColor(): Color {
  return getRandomFromList(colors)
}
