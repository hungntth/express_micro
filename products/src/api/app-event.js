module.exports = (app) => {
    const service = new CustomerService();
    app.use('/app-events', async (req, res, next) => {
        const {payload} = req.body;

        console.log("============ Shopping service record event ============");
        return res.status(200).json(payload)
    })
}