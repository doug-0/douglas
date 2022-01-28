import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import './MyTyped.css';
import './MyTypedResponse.css';

export default function MyTyped() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Sou um <b>Desenvolvedor</b><b style="color: #5151ee"> Front-End</b>!',
        'Crio sites<b style="color: #11efff"> fantásticos!</b>',
        "Faço umas <b>telas</b> <b style='color: #fc6969'>bonitas</b> :)"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="my-typed-animation">
      <span ref={el}></span>
    </div>
  );
}
