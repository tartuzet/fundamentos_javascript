//1.- Si la palabra termina con "ar", se le quitan esas letras. Ejem: Programar => Program
//2.- Si la palabra inicia con Z, se le añade "pe" al final. Ejem: zorro => zorrope
//3.- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio. Ejem: abecedario => abece-dario
//4.- Por último si la palabra es un palindromo ninguna regla anterior cuenta pero devuelve la misma palabra intercalando letras mayusculas con minisculas. Ejem: SOMETEMOS => SoMeTeMoS

function platzom (str){
  let translation = str
  if (str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2) // permite cortar caracteres en un string
  }

  if (str.toLowerCase().startsWith('z')){
    translation += 'pe'
  }

  const length = translation.length
  if (length>=10){
    const firstHald = translation.slice(0,Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHald}-${secondHalf}`
  }

  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str){
    const length = str.length
    let translation = ''
    let capitaliza = true
    for (let i=0;i<length;i++){
      const char = str.charAt(i)
      translation+= capitaliza ? char.toUpperCase() : char.toLowerCase()
      capitaliza = !capitaliza
    }
    return translation
  }

  if (str==reverse(str)){
    return minMay(str)
  }


  return translation
}

console.log(platzom('Programar')) // Program
console.log(platzom('Zorro')) // Zorrope
console.log(platzom('Zarpar')) // Zarppe
console.log(platzom('abecedario')) // abece-dario
console.log(platzom('sometemos')) // SoMeTeMoS
