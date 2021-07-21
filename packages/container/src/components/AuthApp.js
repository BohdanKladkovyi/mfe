import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';


export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  })
  return <div ref={ref}/>
}