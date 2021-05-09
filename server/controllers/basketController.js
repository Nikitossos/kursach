const uuid = require('uuid')
const path = require('path');
const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async addItem(req, res, next) {
        try {
            const { itemId, userId } = req.body;

            let basket = await Basket.findOne({
                  where: { userId },
              });

            if (basket) {
              basket.itemsList.push(itemId);
              basket.update({
                itemsList: basket.itemsList,
              });
            } else {
              basket = await Basket.create({ userId, itemsList: [itemId] });
            }
            
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res) {
      const { userId } = req.params;
      console.log(userId)
      const basket = await Basket.findOne(
          {
              where: { userId },
          },
      )
      return res.json(basket || {})
  }
}

module.exports = new BasketController()
