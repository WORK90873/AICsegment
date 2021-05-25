import React from "react";

export default function Dialog(props) {
    return props.reversed ? (
        <div className="dialog-container fade">
            <div className="img-container">
                <img alt="nonsense" src={props.image} />
            </div>
            <div className="text-container">
                <p
                    style={
                        props.italic
                            ? { fontStyle: "italic" }
                            : { fontStyle: "normal" }
                    }
                >
                    {props.text}
                    <br />
                    {props.text2 ? props.text2 : null}
                </p>
            </div>
        </div>
    ) : (
        <div className="dialog-container fade">
            <div className="text-container">
                <p
                    style={
                        props.italic
                            ? { fontStyle: "italic" }
                            : { fontStyle: "normal" }
                    }
                >
                    {props.text}
                    <br />
                    {props.text2 ? props.text2 : null}
                </p>
            </div>
            <div className="img-container">
                <img alt="stuff" src={props.image} />
            </div>
        </div>
    );
}
