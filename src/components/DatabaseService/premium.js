export default function premium (amount,duration,discount=0){
    return Math.floor((amount / (duration * 12)) * 10)-discount;
}