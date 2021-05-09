import React, { useEffect, useContext } from 'react';

import { Context } from "../index";
import { getOne } from "../http/basketAPI";

import { toJS } from 'mobx'

const Basket = () => {
    const {user} = useContext(Context);

    useEffect(() => {
        const init = async () => {
            const userData = toJS(user.getUser());
            const userBasket = await getOne({ userId: userData.id  });
            console.log(userBasket)
        };
        init();
    }, [user]);

    return (
        <div>
            basket
        </div>
    );
};

export default Basket;
