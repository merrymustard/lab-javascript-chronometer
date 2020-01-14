class Chronometer {
  
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // this.milliseconds=0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }
  getMinutes() {
    return parseInt(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60;
  }
  // getMilliseconds(){

  // }
  twoDigitsNumber(digits) {
    let result = digits.toString()
    return result.length === 1 ? '0'+result      :   result
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime =0
  }
  splitClick() {
    return this.currentTime ;
  }
}



// class Chronometer {
//   constructor() {
//     this.currentTime = 0
//     this.intervalId = 1000
//     this.myTimer = null
//   }

//   startClick() {
//     return (this.myTimer = window.setInterval(() => {
//       this.currentTime += 1
//     }, this.intervalId))
//   }

//   getMinutes() {
//     return Math.floor(this.currentTime / 60)
//   }
//   // IMPORTANT DO NOT TOUCH THE /1 PLEASE
//   getSeconds() {
//     return Math.floor(this.currentTime - this.getMinutes() * 60)
//   }
//   getMs() {
//     return Math.floor(
//       this.currentTime * 1000 -
//         (this.getSeconds() * 1000 + this.getMinutes() * 60000) / 10
//     )
//   }
//   twoDigitsNumber(val) {
//     if (val < 10) {
//       return `0${val}`
//     } else {
//       return `${val}`
//     }
//   }

//   stopClick() {
//     clearInterval(this.myTimer)
//   }

//   resetClick() {
//     window.setInterval(() => {
//       this.currentTime += 0
//     }, this.intervalId)
//   }

//   splitClick() {
//     return `${twoDigitsNumber(getMinutes())}:${twoDigitsNumber(
//       getSeconds()
//     )}:${twoDigitsNumber(getMs())}`
//   }
// }
