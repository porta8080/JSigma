function s(i){
    is = i.split('#{').join('${');
    try{
        return eval('`'+is+'`');
    }catch(e){
        return i;
    }
}
function Ʃ(i){
    return s(i);
}
function sigma(i){
    return s(i);
}
function jsigma(i){
    return s(i);
}