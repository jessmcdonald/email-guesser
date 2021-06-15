const ahoyThere = (req, res, next) => {
    res.status(200).json({
        body: 'Ahoy there from the server!'
    });
};

module.exports.ahoyThere = ahoyThere;

const getEmail = (req, res, next) => {
    res.status(200).json({
        body: 'email'
    });
};

module.exports.getEmail = getEmail;