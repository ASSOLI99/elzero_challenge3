function info(name, age, aval){
    document.write(`<div>`);
    if(aval===true || age===true || name===true){
    if(typeof(aval)==="boolean" && typeof(name)==="string" && typeof(age)==="number"){
        document.write(`Hello ${name}, Your age Is ${age},you are Available for here`);
    }else if(typeof aval==="boolean" && typeof name==="number" && typeof age==="string"){
        document.write(`Hello ${age}, Your age Is ${name},you are Available for here`);
    }else if(typeof aval==="string" && typeof name==="boolean" && typeof age==="number"){
    document.write(`Hello ${aval}, Your age Is ${age},you are Available for here`);
    }else if(typeof aval==="string" && typeof name==="number" && typeof age==="boolean"){
        document.write(`Hello ${aval}, Your age Is ${name},you are Available for here`);
    }else if(typeof aval==="number" && typeof name==="boolean" && typeof age==="string"){
        document.write(`Hello ${age}, Your age Is ${aval},you are Available for here`);
        }else{
            document.write(`are you OK !!??`);
                    
                }
        }
        else if(aval===false || age===false || name===false){
        if(typeof(aval)==="boolean" && typeof(name)==="string" && typeof(age)==="number"){
        document.write(`Hello ${name}, Your age Is ${age},you are Not Available for here`);
        }else if(typeof aval==="boolean" && typeof name==="number" && typeof age==="string"){
            document.write(`Hello ${age}, Your age Is ${name},you are Not Available for here`);
        }else if(typeof aval==="string" && typeof name==="boolean" && typeof age==="number"){
        document.write(`Hello ${aval}, Your age Is ${age},you are Not Available for here`);
        }else if(typeof aval==="string" && typeof name==="number" && typeof age==="boolean"){
            document.write(`Hello ${aval}, Your age Is ${name},you are Not Available for here`);
        }else if(typeof aval==="number" && typeof name==="boolean" && typeof age==="string"){
            document.write(`Hello ${age}, Your age Is ${aval},you are Not Available for here`);
            }else{
                document.write(`are you OK !!??`);
                        
                    }
    }
    else{
document.write(`are you OK !!??`);
        
    }

        
    document.write(`</div>`);
}
(info("abdullah", 20, true));
(info(20, "abdullah", true));
(info(true, 20, "abdullah"));
(info(false, "abdullah", 20));
(info("whwh", "jasdkl", false));