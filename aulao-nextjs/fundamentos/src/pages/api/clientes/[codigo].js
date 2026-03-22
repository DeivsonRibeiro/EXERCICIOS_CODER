export default function hanlder(req, res){
   
   const codigo = req.query.codigo
    res.status(200).json({
            id: codigo,
           nome: `Maria ${codigo}`,
            email: `mariamaria${codigo}@xxtemail.com`
    })
}