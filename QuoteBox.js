import React from "react";

const cstyle={
    float:'center'
}
const QuoteBox = () => {
    return(
        <div className="quote-box">
            <blockquote>
                "Discipline is the bridge between goals and accomplishment."
            </blockquote>
            <cite style={cstyle}>-Jim Rohn</cite>
        </div>
    );
};

export default QuoteBox;
