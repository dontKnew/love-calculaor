// Created by Sajid Ali

//alert("suggest me for how can i make more this effective code");

let prevName = "";
const Result = () =>
{
    const darling = document.getElementById( "darling" ).value;
    const selfName = document.getElementById( "selfname" ).value;
    
    const resultH = document.getElementById( "Result" );
    const heartH = document.getElementById( "heart" );
    const ok = true ;

    if( darling == selfName )
    {
        alert( "Can't fall in love with yourself!" );
        resultH.innerHTML = "";
        heartH.innerHTML = "";
        return false;
    }

    if( darling == prevName  )
    {
        alert( "Calculate only one times, because true love do one time.\nIf you want to calculate again,\nRefresh the page." );
        resultH.innerHTML = "";
        heartH.innerHTML = "";
        return false;
    }
    prevName = darling; 

    let num = Math.floor( Math.random() * 100 );
    resultH.innerHTML = `${num}%`;
    heartH.innerHTML = "💟";
    alert( `Hey ${selfName}, ${darling} is ${num}% in love with you.` );
    return false;
}
