const sampleData = require ("../sampleData.json");


function ahoyThere(req, res, next){

    if (validateDomain(req.body.Domain)){
        let responseData = validateDomain(req.body.Domain);

        res.status(200).json({
            body: responseData
        });
    } else {
        let responseData = "Sorry we can't guess the email format for that domain :("

        res.status(200).json({
            body: responseData
        });
    }
};


module.exports.ahoyThere = ahoyThere;

function guessEmail(inputData) {
    return 'wheyy';
}

function identifyEmailFormat(emailAddress, fullName) {
    let emailString = emailAddress.substring(0, emailAddress.indexOf('@'));
    let fullNameString = fullName.replace(' ', '').toLowerCase();
    
    if (emailString === fullNameString) {
        return 'fullname email format';
    }
    return 'initial email format';
}


function validateDomain(domain) {
    let sampleEmail = null

    for(let i = 0; i < sampleData.length; i++){
        if(sampleData[i].Email.includes(domain)){
            sampleEmail = identifyEmailFormat(sampleData[i].Email, sampleData[i].FullName);
            break
        }
    }
    return sampleEmail;
}


function emailFormat(email) {
    return email

}

// check if domain is known in sample data

// check if format is full name or just initial

// create email address for input data

// return email address or 'sorry'