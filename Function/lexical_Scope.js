// lexical scope:-
// The lexical scope allows a function scope to access statically 
// the variables from the outer scopes.


const myVal = "Value Global Scope";

function outerMost(){
    // const myVal = "value Outer Block Scope";
    const inner =()=> {
        // const myVal = "value Inner";
        const innerMost =()=> {
            console.log("inside the fun", myVal);
        }
        console.log("Print Me");
        innerMost();
    }    
    inner();

}

outerMost();