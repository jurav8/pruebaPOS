const productCtrl = {};

const product = require("../model/product");
const Products = require("../model/product");

productCtrl.getProducts = async (req, res) => {
  try {
    res.json(await Products.find());
  } catch (err) {
    res.json(err);
  }
};

productCtrl.createProduct = async (req, res) => {
  const { description, price, cost } = req.body;
  try {
    res.json({
      message: "Product Saved",
      product: await new Products({
        description,
        price,
        cost,
        status: true,
      }).save(),
    });
  } catch (err) {
    res.json(err);
  }
};

productCtrl.getProduct = async (req, res) => {
  try {
    res.json(await Products.findById(req.params.id));
  } catch (err) {
    res.json(err);
  }
};

productCtrl.updateProduct = async (req, res) => {
  const { description, price, cost, status } = req.body;

  try {
    res.json(
      await Products.findByIdAndUpdate(
        req.params.id,
        {
          description,
          price,
          cost,
          status,
        },
        { new: true }
      )
    );
  } catch (err) {
    res.json(err);
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    res.json({
      message: "Product removed",
      product: await Products.findByIdAndRemove(req.params.id),
    });
  } catch (err) {
    res.json(err);
  }
};

productCtrl.changeStatusProduct = async (req, res) => {
  try {
    let product = await Products.findById(req.params.id);

    res.json({
      message: `Product ${!product.status ? "Active" : "Inactive"}`,
      product: await Products.findByIdAndUpdate(
        req.params.id,
        {
          $set: { status: !product.status },
        },
        { new: true }
      ),
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = productCtrl;
