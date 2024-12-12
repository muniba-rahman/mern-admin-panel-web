const home = async (req, res)=>{
    try {
        res.status(200).send("Response");
    } catch (error) {
        res.status(400),send("Page Not Found");
    }
};

const register = async(req, res)=>{
    try {
        res.status(200).send("Register")
    } catch (error) {
        res.status(400).send("Page Not Found");
    }
}

module.exports = {home, register};