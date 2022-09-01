const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const symbols = '~!@#$%^&*()_/'

const passBox = document.getElementById('password-generate')
const passwordLength = document.getElementById('password-length')
const passwordUpperCase = document.getElementById('password-uppercase')
const passwordLowerCase = document.getElementById('password-lowercase')
const passwordNumbers = document.getElementById('password-numbers')
const passwordSymbols = document.getElementById('password-symbols')

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword =(password = "")=>{
    if(passwordUpperCase.checked){
        password += getRandomData(upperSet)
    }
    if(passwordLowerCase.checked){
        password += getRandomData(lowerSet)
    }
    if(passwordNumbers.checked){
        password += getRandomData(numbers)
    }
    if(passwordSymbols.checked){
        password += getRandomData(symbols)
    }

    if(password.length < passwordLength.value){
        return generatePassword(password) //recursive function
    }
    console.log(truncateString(password,passwordLength.value))
   passBox.innerText =  truncateString(password,passwordLength.value)
   navigator.clipboard.writeText(truncateString(password,passwordLength.value))
}

document.getElementById('generateBtn').addEventListener('click',
function(){
    generatePassword()
})

const truncateString =(str,num) =>{
    if(str.length > num){
        let subStr = str.substring(0,num)
        return subStr
    }
    else{
        return str
    }
}