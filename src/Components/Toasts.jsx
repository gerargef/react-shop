import React, { useEffect } from 'react'

function Toasts(props) {
    const {name, closeAlert} = props;
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {clearTimeout(timerId)};
    },[name])
  return (
    <div id='toast-container'>
        <div className="toast slide-in-blurred-bottom my-toast">Товар "{name}" был добавлен в корзину </div>
    </div>
  )
}

export default Toasts