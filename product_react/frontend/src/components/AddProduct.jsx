import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const addProduct = () => {
        axios.post('http://localhost:2000/product/add', product)
            .then((res) => navigate('/admin/products'))
            .catch((err) => console.log(err))
    }

    return (

        <>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        <div class="card my-5">

                            <div class="card-body">
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                    />
                                    <label for="formId1">Product Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                    />
                                    <label for="formId1">Price</label>
                                </div>

                                <button
                                    type="button"
                                    class="btn btn-dark"
                                    onClick={addProduct}
                                >
                                    Add Product
                                </button>


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default AddProduct
