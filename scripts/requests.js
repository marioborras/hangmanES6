const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }else {
        throw new Error("unable to fetch the puzzle")
    }
    
}
//old version without async and await
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
//     if(response.status === 200){
//         return response.json()
//     }else {
//         throw new Error("Unable to fetch the puzzle")
//     }
//     })
// }



const getCountry = async(countryCode) =>  {
    const response = await fetch("http://restcountries.eu/rest/v2/all")
    if (response.status === 200) {
        const countryData = await response.json()

        return countryData.find((country)=> country.alpha2Code === countryCode)
    }else {
        throw new Error("unable to fetch the country")
    }
}
// const getCountry = (countryCode) =>  {
//     return fetch("http://restcountries.eu/rest/v2/all").then((response)=> {
//         if (response.status == 200){
//              return response.json()
            
//         }else{
//             throw new Error("Unable to fetch the country")
//         }
//     }).then((data)=> {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }


const getLocation = async() => {
    const response = await  fetch("https://ipinfo.io/json?token=3d111df5d48e30")
    if (response.status == 200){
        return response.json()
    }else {
        throw new Error("unable to fetch the IP info")
    }
}

//old version without aync and await
// const getLocation = () => {
//     return fetch("https://ipinfo.io/json?token=3d111df5d48e30").then((response)=> {
//         if (response.status === 200) {
//             return response.json()
//         } else{
//             throw new Error("Unable to fetch ip info")
//         }
//     })
// }

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)

    return country

}