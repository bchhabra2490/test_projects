export function addNumber(number) {
    return {
        type:"ADD",
        paylaod:number
    }
}

export function subtractNumber(number) {
    return {
        type:"SUBTRACT",
        paylaod:number
    }
}