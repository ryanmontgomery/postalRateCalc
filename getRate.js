
function getRate(mailType, weight) {
    if (mailType === 'stamped') {
        mailType = 'Letter (Stamped)';
        if (parseFloat(weight) <= 1) rate = '0.50';
        else if (parseFloat(weight) <= 2) rate = '0.71';
        else if (parseFloat(weight) <= 3) rate = '0.92';
        else if (parseFloat(weight) <= 3.5) rate = '1.13';
        //Same as large envelope prices after this as per note 4
        else if (parseFloat(weight) <= 4) rate = '1.63';
        else if (parseFloat(weight) <= 5) rate = '1.84';
        else if (parseFloat(weight) <= 6) rate = '2.05';
        else if (parseFloat(weight) <= 7) rate = '2.26';
        else if (parseFloat(weight) <= 8) rate = '2.47';
        else if (parseFloat(weight) <= 9) rate = '2.68';
        else if (parseFloat(weight) <= 10) rate = '2.89';
        else if (parseFloat(weight) <= 11) rate = '3.10';
        else if (parseFloat(weight) <= 12) rate = '3.31';
        else if (parseFloat(weight) <= 13) rate = '3.52';
        else rate = '0.00';
    }

    else if (mailType === 'metered') {
        mailType = 'Letter (Metered)';
        if (parseFloat(weight) <= 1) rate = '0.47';
        else if (parseFloat(weight) <= 2) rate = '0.68';
        else if (parseFloat(weight) <= 3) rate = '0.89';
        else if (parseFloat(weight) <= 3.5) rate = '1.10';
        //Same as large envelope prices after this as per note 4
        else if (parseFloat(weight) <= 4) rate = '1.63';
        else if (parseFloat(weight) <= 5) rate = '1.84';
        else if (parseFloat(weight) <= 6) rate = '2.05';
        else if (parseFloat(weight) <= 7) rate = '2.26';
        else if (parseFloat(weight) <= 8) rate = '2.47';
        else if (parseFloat(weight) <= 9) rate = '2.68';
        else if (parseFloat(weight) <= 10) rate = '2.89';
        else if (parseFloat(weight) <= 11) rate = '3.10';
        else if (parseFloat(weight) <= 12) rate = '3.31';
        else if (parseFloat(weight) <= 13) rate = '3.52';
        else rate = '0.00';
    }

    else if (mailType === 'flat') {
        mailType = 'Large Envelope (Flat)';
        if (parseFloat(weight) <= 1) rate = 1.00;
        else if (parseFloat(weight) <= 2) rate = '1.21';
        else if (parseFloat(weight) <= 3) rate = '1.42';
        else if (parseFloat(weight) <= 4) rate = '1.63';
        else if (parseFloat(weight) <= 5) rate = '1.84';
        else if (parseFloat(weight) <= 6) rate = '2.05';
        else if (parseFloat(weight) <= 7) rate = '2.26';
        else if (parseFloat(weight) <= 8) rate = '2.47';
        else if (parseFloat(weight) <= 9) rate = '2.68';
        else if (parseFloat(weight) <= 10) rate = '2.89';
        else if (parseFloat(weight) <= 11) rate = '3.10';
        else if (parseFloat(weight) <= 12) rate = '3.31';
        else if (parseFloat(weight) <= 13) rate = '3.52';
        else rate = '0.00';
    }

    else if (mailType === 'package') {
        mailType = 'First-Class Package';
        if (parseFloat(weight) <= 4) rate = '3.50';
        else if (parseFloat(weight) <= 8) rate = '3.75';
        else if (parseFloat(weight) <= 9) rate = '4.10';
        else if (parseFloat(weight) <= 10) rate = '4.45';
        else if (parseFloat(weight) <= 11) rate = '4.80';
        else if (parseFloat(weight) <= 12) rate = '5.15';
        else if (parseFloat(weight) <= 13) rate = '5.50';
        else rate = '0.00';
    }

    else {
        mailType = 'mailType not defined: ' + mailType;
        rate = '0.00';

    }

    mailInfo = { type: mailType, weight: weight, rate: rate };
    return mailInfo;
}

module.exports = getRate;