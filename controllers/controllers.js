const sampleData = require ("../sampleData.json");
const EMAIL_FORMAT = require ("../enums/emailFormatEnums");


function getEmail(req, res){

    let responseData = null;

    // missing param
    if (!req.body.Domain || !req.body.FullName) {
        responseData = "Missing param in request";
        return res.status(400).json({
            message: responseData
        }).send();
    }

    // wrongly formatted fullname
    if (!validateFullName(req.body.FullName)) {
        responseData = "FullName param has wrong format";
        return res.status(400).json({
            message: responseData
        }).send();
    }

    // wrongly formatted domain
    if (!validateDomain(req.body.Domain)) {
        responseData = "Domain param has wrong format";
        return res.status(400).json({
            message: responseData
        }).send();
    }

    // 
    if (checkReferenceEmailFormat(req.body.Domain)){
        let format = checkReferenceEmailFormat(req.body.Domain);
        let responseData = buildGuessedEmailAddress(req.body.FullName, req.body.Domain, format);

        res.status(200).json({
            body: responseData
        });
    } else {
        let responseData = "Sorry we can't guess the email format for that domain :("

        res.status(400).json({
            message: responseData
        });
    }
};

module.exports.getEmail = getEmail;

const validateDomain = (domain) => domain.includes('.');

const validateFullName = (fullName) => {
    let regFullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return !!regFullName.test(fullName);
}

/**
 * Checks if we have en email from the requested domain to use as a reference,
 * if we have a suitable reference email, return the format of the email address
 * @param {string} domain 
 * @returns {string | null} referenceEmail
 */
function checkReferenceEmailFormat(domain) {
    const found = sampleData.find(element => element.Email.includes(domain))
    if(!found){
        return
    }
    return identifyEmailFormat(found.Email, found.FullName);
}

/**
 * Determine if the email format is firstName+lastName@domain.com or firstInitial+LastName@domain.com
 * @param {string} emailAddress 
 * @param {string} fullName 
 * @returns {string} email format
 */
const identifyEmailFormat = (emailAddress, fullName) => {
    let emailString = emailAddress.substring(0, emailAddress.indexOf('@'));
    let fullNameString = fullName.replace(' ', '').toLowerCase();
    let initialLastNameString = fullName.charAt(0) + fullName.substring(fullName.indexOf(' ') + 1).toLowerCase();

    if (emailString === fullNameString) {
        return EMAIL_FORMAT.FULL_NAME;
    }
    return EMAIL_FORMAT.INITIAL_LASTNAME;
}

/**
 * Build the final guessed email address
 * @param {string} fullName 
 * @param {string} domain 
 * @param {string} format 
 * @returns {string} guessed email address
 */
const buildGuessedEmailAddress = (fullName, domain, format) => {
    let guessedEmailString = null;
    let fullDomain = '';

    // TODO extract function
    if (domain.charAt(0) == '@'){
        fullDomain = domain;
    } else {
        fullDomain = '@' + domain;
    }

    switch (format) {
        case EMAIL_FORMAT.FULL_NAME:
            guessedEmailString = fullName.replace(' ', '').toLowerCase();
            break;
        case EMAIL_FORMAT.INITIAL_LASTNAME:
            guessedEmailString = fullName.charAt(0) + fullName.substring(fullName.indexOf(' ') + 1).toLowerCase();
            break;
    }
    return guessedEmailString + fullDomain;
}