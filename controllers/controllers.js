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

        res.status(200).json({
            body: responseData
        });
    }
};

module.exports.getEmail = getEmail;

function validateDomain(domain) {
    if (domain.includes('.')){
        return true;
    } else {
        return false;
    }
}

function validateFullName(fullName) {
    let regFullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(regFullName.test(fullName)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if we have en email from the requested domain to use as a reference,
 * if we have a suitable reference email, return the format of the email address
 * @param {string} domain 
 * @returns {string | null} referenceEmail
 */
function checkReferenceEmailFormat(domain) {
    let referenceEmailFormat = null

    for(let i = 0; i < sampleData.length; i++){
        if(sampleData[i].Email.includes(domain)){
            referenceEmailFormat = identifyEmailFormat(sampleData[i].Email, sampleData[i].FullName);
            break
        }
    }
    return referenceEmailFormat;
}

/**
 * Determine if the email format is firstName+lastName@domain.com or firstInitial+LastName@domain.com
 * @param {string} emailAddress 
 * @param {string} fullName 
 * @returns {string} email format
 */
function identifyEmailFormat(emailAddress, fullName) {
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
function buildGuessedEmailAddress(fullName, domain, format) {
    let guessedEmailString = null;

    switch (format) {
        case EMAIL_FORMAT.FULL_NAME:
            guessedEmailString = fullName.replace(' ', '').toLowerCase();
            break;
        case EMAIL_FORMAT.INITIAL_LASTNAME:
            guessedEmailString = fullName.charAt(0) + fullName.substring(fullName.indexOf(' ') + 1).toLowerCase();
            break;
    }
    return guessedEmailString + domain;
}