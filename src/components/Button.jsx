import './Button.css';

function AlertEnable(centinela) {
    if (centinela) {
        alert("Ten cuidado con lo que haces");
    }else{
        alert("Te la aventaste buena");
    }
}

function Button(props) {
    if (props.text==="Random") {
        return(
            <div>
                <button onClick={AlertEnable} className="color-1 tamanio">{props.text}</button>
            </div>
        );
    }else{
        return(
            <div>
                <button onClick={()=>AlertEnable(false)} className="color-2 tamanio">{props.text}</button>
            </div>
        );
    }
}

export default Button;