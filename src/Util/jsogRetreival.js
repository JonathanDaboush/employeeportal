import JSOG from 'jsog';
function decrypt(list){
    let target = JSOG.stringify(list);
    let newObject= JSOG.parse(target);
    return newObject
}
export default decrypt;