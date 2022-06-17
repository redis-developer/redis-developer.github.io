import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const ReactTyped = (props) => {
  const typeTarget = useRef(null);
  const { strings, typeSpeed } = props;

  useEffect(() => {
    if (!typeTarget.current) {
      return;
    }

    const typed = new Typed(typeTarget.current, {
      strings: strings,
      typeSpeed: typeSpeed ?? 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default ReactTyped;
