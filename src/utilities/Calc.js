const Calc = (a,b,op)=>{
    const result;
    if(op==="+"){
        result = a+b;
    }
    else if(op==="-"){
        result = a-b;
    }
    else if(op==="x"){
        result = a*b;
    }
    else if(op==="/"){
        result = a/b;
    }
    return result;
}

export default Calc;