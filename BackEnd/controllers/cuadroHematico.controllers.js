import CuadroHematico from '../models/Cuadrohematico.js'

export const getCuadro = async (req,res) =>{
    try {
        const cuadro = await CuadroHematico.findOne({idExamenCuadro:req.params.id})
        res.json(cuadro);
    } catch (error) {
        console.log(error);
    }
}

export const getCuadroHemaricos = async(req,res)=>{
    const { hasta, desde } = req.query;
    const query = {estado: true}
    const [ total, cuadrohematico ] = await Promise.all([
        CuadroHematico.countDocuments(query),
        CuadroHematico.find(query)
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        cuadrohematico
    })
};

export const postCuadroHemarico = async(req, res ) => {
    const {idExamenCuadro, hematocrito, hemoglobina, eritrocitos, leucositos,neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales} = req.body;
    const hematico = new CuadroHematico({idExamenCuadro, hematocrito, hemoglobina, eritrocitos, leucositos,neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales});
    await hematico.save();
    res.json({
        "message": "post api",
        hematico
    })
}

export const deleteCuadroHemarico = async (req, res)=>{
    const {id} = req.params
    const hematico = await CuadroHematico.findByIdAndUpdate( id, { estado: false } );
    return res.status(200).json({hematico,
        msg : 'el resultado del cuadro hematico fue eliminada correctamente'
    });
}

export const updateCuadroHematico = async(req, res)=>{
    const {id} = req.params;
    const hematocrito = req.body.hematocrito;
    const hemoglobina = req.body.hemoglobina;
    const eritrocitos = req.body.eritrocitos;
    const leucositos = req.body.leucositos;
    const neutrofilos = req.body.neutrofilos;
    const eosinofilos = req.body.eosinofilos;
    const linfocitos = req.body.linfocitos;
    const plaquetas = req.body.plaquetas;
    const proteinasTotales = req.body.proteinasTotales;
    const hematico = await CuadroHematico.findByIdAndUpdate(id, {hematocrito, hemoglobina, eritrocitos, leucositos,neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales},{ new: true });
    return res.status(200).json({hematico,
        msg : 'el resultado del cuadro hematico fue actualizado correctamente'
    });
}