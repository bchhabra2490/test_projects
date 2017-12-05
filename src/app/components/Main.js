import React from "react";

export const Main = (props)=> {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>Change the Username</button>
                    
                    <button
                        className="btn btn-primary" style={{marginLeft:10}}
                        onClick={() => props.changeAge(10)}>Change the Age</button>    
                </div>
            </div>
        </div>
    );
}