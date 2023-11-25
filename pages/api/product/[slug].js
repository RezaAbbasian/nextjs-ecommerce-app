async function handler(req,res){
        const pSlug = req.query.slug
        const a =  await
        fetch(`${process.env.API_URL}products/`);
        const b = await a.json();
        const product = b.find( (item) => item.slug == pSlug)
        console.log(b);
        res.json({product})
}

export default handler