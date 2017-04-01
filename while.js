let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

let round = 1
const ambosSiganVivos = () => vidaGoku > 0 && vidaSuperman > 0
const calcularGolpe = () => Math.round (Math.random() * (MAX_POWER-MIN_POWER)) + MIN_POWER

while (ambosSiganVivos()){
  console.log (`Round ${round}`)
  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()
  if (golpeGoku>golpeSuperman){
    // ataca goku
    console.log(`Goku ataca a Superman con un golpe  de ${golpeGoku}`)
    vidaSuperman -= golpeGoku
    console.log(`Superman queda en ${vidaSuperman} de vida`)
  }else{
    // ataca superman
    console.log(`Superman ataca a Goku con un golpe  de ${golpeSuperman}`)
    vidaGoku -= golpeSuperman
    console.log(`Goku queda en ${vidaGoku} de vida`)
  }

  round++

}

if (vidaGoku>0){
  console.log(`Goku Gano !!!`)
}else{
  console.log(`Superman Gano !!!`)
}
