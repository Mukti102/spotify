export const convert = (sm) => {
    // dapatkan menit
    const minutes = Math.floor(sm/60000);
    // dapatkan detik 
    const second = ((sm % 60000) / 1000).toFixed(0)
     
    // merge 
    return `${minutes}:${handleNumber(second)}`
}

const handleNumber = (number) => {
    if(number < 10 ){
        return `0${number}`
    }
    else{
        return number
    }
}