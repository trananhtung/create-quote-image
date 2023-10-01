const colors = [
  { textColor: '#FFFFFF', background: '#300A24', authorColor: '#FFFF55' },
  { textColor: '#FFFFFF', background: '#083045', authorColor: '#EED369' },
  { textColor: '#FFFFFF', background: '#0C0C0C', authorColor: '#58C1C1' },
  { textColor: '#00D700', background: '#000000', authorColor: '#FF0000' },
  { textColor: '#917F6B', background: '#F8F8F8', authorColor: '#766354' },
  { textColor: '#000000', background: '#DD9BE7', authorColor: '#F8F8F8' },
  { textColor: '#FFFFFF', background: '#292929', authorColor: '#CCB33C' },
  { textColor: '#FFFFFF', background: '#4A154B', authorColor: '#CCB33C' },
  { textColor: '#1A1D21', background: '#5B415B', authorColor: '#CCB33C' },
  { textColor: '#1A1D21', background: '#4F400E', authorColor: '#F8F8F8' },
  { textColor: '#1A1D21', background: '#FFC2C0', authorColor: '#F8F8F8' },
  { textColor: '#1A1D21', background: '#FFC806', authorColor: '#300A24' },
  { textColor: '#1A1D21', background: '#4EE077', authorColor: '#F8F8F8' },
]

export type Color = typeof colors[number]
export default colors
