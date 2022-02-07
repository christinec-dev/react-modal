import React, {useEffect, useState} from "react";

//Reusable component that will render custom alerts via application
export default function Modal(props) {
    const [message] = useState(props.message);
    const [show, setShow] = useState(props.show);

    //closes the modal after 3000ms
    useEffect(() => {
        setTimeout(() => {
          setShow(false);
        }, 9000);
    });

    return(
        /*boolean value that determines if it pops up or not */
        <div className={show ? "modal  modal-content display-block" : "modal display-none"}>
            {/*message to be displayed when it pops up */}
            <section className="modal-main">
                <p className="modal-body">{message} </p>
            </section>
        </div>
    )
}