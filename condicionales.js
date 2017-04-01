const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars = 13

const nameSacha = 'Sacha'
const ageSacha = 26

const nameSanti = 'Santi'
const ageSanti = 12

const canWatchStarWars = (name,age,isWithAdult) => {
  if (age>=pgStarWars){
    alert(`${name} puede pasar a ver ${starWars7}`)
  }
  else if(isWithAdult){
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`)
  }
  else{
    alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} años y necesita tener ${pgStarWars} `)
  }
}

canWatchStarWars(nameSacha,ageSacha)
canWatchStarWars(nameSanti,ageSanti,true)
