const productModel = require('../model/model.js');

const add = async (req, res) => {
    const data = new productModel(req.body);
    const result = await data.save();
    res.json(result);
}

const update = async (req, res) => {
    const { id, name, price } = req.body;
    const result = await productModel.findByIdAndUpdate({ _id: id }, { name, price });
    res.json({
        message: "data updated",
        data: result
    })
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const result = await productModel.findByIdAndDelete({ _id: id });
    res.json({
        message: "data deleted",
        data: result
    })
}
const show = async (req, res) => {
    const result = await productModel.find();
    res.json(result)
}

const fetchSingle = async (req, res) => {
    const { id } = req.params;
    const result = await productModel.findById(id);
    res.json(result)
}

module.exports = { add, update, deleteProduct, show, fetchSingle }

