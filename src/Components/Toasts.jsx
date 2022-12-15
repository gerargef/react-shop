import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context';



function Toasts() {
    const {alertName,closeAlert } = useContext(ShopContext);
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {clearTimeout(timerId)};
    },[alertName])
  return (
    <div id='toast-container'>
        <div className="toast slide-in-blurred-bottom my-toast">Товар "{alertName}" был добавлен в корзину </div>
    </div>
  )
}

export default Toasts