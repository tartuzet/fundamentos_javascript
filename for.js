const nombre = 'TaTo'
const dias =[
  'lunes',
  'martes',
  'miécoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
]

function correr(){
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max-min)) + min
}

let totalKms = 0
const len = dias.length
for (let i=0;i<len;i++){
  const kms = correr()
  totalKms += kms
  console.log(`El dia ${dias[i]} corrió ${kms} Kilometros`)
}

console.log(`En promedio ${nombre} corrió ${(totalKms/len).toFixed(2)} kms`)
