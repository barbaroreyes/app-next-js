import dbConnect from '../../../db/dbconect';
import Product from '../../../models/Product';
dbConnect()

export default async  function   (req, res) {

const {method} = req
switch (method) {
    case 'GET': {
    
        try {
            const product = await Product.find({});
            res.status(200).json({success: true , product:product})
            
        } catch (error) {
            res.status(404).json({success:false})
            
        }
    }
    break ;
    case 'POST': {
        try {
            const product = await Product.create(req.body.product)
            res.status(200).json({success: true , product:product})
            
        } catch (error) {
            res.status(404).json({success:false})
        }

    }
}

}   